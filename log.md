# 封装button组件

> 示例图

![button组件示例图](./docs/log/images/button组件示例图.png)

> 主要步骤：

1. 先在`type.ts`中定义好封装的组件需要接受的数据的类型，既要有自己封装的新的属性，也要兼容原生的属性`autofocus`等

   - ```ts
     export interface ButtonProps{
         type?: ButtonType;
         size?: ButtonSize,
         plain?:boolean, //样式展示不同的形式，有背景填充和无背景填充
         round?: boolean,//圆角
         circle?:boolean,//圆形按钮
         disabled?:boolean,//禁用
         nativeType?:ButtonNative,
         autofocus?:boolean,
     }
     ```

2. 由于封装的组件是给其他人使用，使用需要让其他人能够拿到里面`原始的组件实例`,因此需要对外暴露DOM对象，并且需要对暴露的对象进行定义，确保在外面能够通过`.value._ref`直接获取DOM对象，而不是Proxy代理

   - ```ts
     let _ref = ref<HTMLButtonElement>();
     defineExpose({
         ref:_ref
     })
     
     // 按钮的类型
     export interface ButtonInstance{
         ref:HTMLButtonElement,
     }
     ```

3. 最后一步就是写样式,上面是使用封装好的组件，下面是组件内部的实现

   - ```html
     <Button type = "success" plain>plain</Button>
     
     <button
     class="wm-button"
     :class="{
         [`wm-button--${type}`]:type,
         [`wm-button--${size}`]:size,
         'is-plain':plain,
         'is-circle':circle,
         'is-round':round,
         'is-disabled':disabled,
     }"
     :disabled = "disabled"
     :autofocus = "autofocus"
     :type = "nativeType"
     ref="_ref"
     >
     <span>
         <!-- 让组件中的内容，在这里呈现 -->
         <slot></slot>
     </span>
     </button>
     ```

   - 通过defindeProps接受参数，对不同的class进行赋值

   - 最后在css中使用，**主要是利用了css中后写的样式会对先写的样式进行覆盖的原理**

     - ```css
       /* 先定义基础的属性 */
       .wm-button {
           /* 按钮字体粗细：复用全局的主字体粗细变量 */
           --wm-button-font-weight: var(--wm-font-weight-primary);
       }
       
       /* 然后定义行为，即真正的样式 */
       .wm-button {
           font-weight: var(--wm-button-font-weight);
       }
       
       /* 
       	最后当要通过行为去修改样式的时候，就可以直接修改需要修改的属性即可
       
       */
       &:focus {
           color: var(--wm-button-hover-text-color);
           border-color: var(--wm-button-hover-border-color);
           background-color: var(--wm-button-hover-bg-color);
           outline: none;    
       }
       ```

4. 最后就是利用三个插件对css进行for循环修改：`postcss-each`,`postcss-color-mix`,`postcss-for`

   - ```scss
     /* 利用@each对不同的buttonType进行遍历，再进行颜色的选择 */
     @each $val in primary,success,warning,info,danger {
       .wm-button--$(val) {
         --wm-button-text-color: var(--wm-color-white);
         --wm-button-bg-color: var(--wm-color-$(val));
         --wm-button-border-color: var(--wm-color-$(val));
         --wm-button-outline-color: var(--wm-color-$(val)-light-5);
         
         --wm-button-active-color: var(--wm-color-$(val)-dark-2);
     
         --wm-button-hover-text-color: var(--wm-color-white);
         --wm-button-hover-bg-color: var(--wm-color-$(val)-light-3);
         --wm-button-hover-border-color: var(--wm-color-$(val)-light-3);
     
         --wm-button-active-bg-color: var(--wm-color-$(val)-dark-2);
         --wm-button-active-border-color: var(--wm-color-$(val)-dark-2);
     
         --wm-button-disabled-text-color: var(--wm-color-white);
         --wm-button-disabled-bg-color: var(--wm-color-$(val)-light-5);
         --wm-button-disabled-border-color: var(--wm-color-$(val)-light-5);
       }
       .wm-button--$(val).is-plain {
         --wm-button-text-color: var(--wm-color-$(val));
         --wm-button-bg-color: var(--wm-color-$(val)-light-9);
         --wm-button-border-color: var(--wm-color-$(val)-light-5);
         --wm-button-hover-text-color: var(--wm-color-white);
         --wm-button-hover-bg-color: var(--wm-color-$(val));
         --wm-button-hover-border-color: var(--wm-color-$(val));
         --wm-button-active-text-color: var(--wm-color-white);
       }
     }
     ```

   - ```scss
     /* 这里尝试使用@each 语法去生成颜色 */
     @each $val,$color in (primary,success),(#409eff,#67c23a){
         --wm-color-1-$(val):$(color);
         @for $i from 3 to 9 by 2{ 
             --wm-color-1-$(val)-light-$(i):mix(#fff,$(color),.$(i));
         }
         --wm-color-1-$(val)-light-8: mix(#fff,$(color),.8);
         --wm-color-1-$(val)-dark-2: mix(#000,$(color),.2);
     }
     
     /* 效果等价于 */
     --wm-color-primary: #409eff;
     --wm-color-primary-light-3: rgb(121, 187, 255);
     --wm-color-primary-light-5: rgb(160, 207, 255);
     --wm-color-primary-light-7: rgb(198, 226, 255);
     --wm-color-primary-light-8: rgb(217, 236, 255);
     --wm-color-primary-light-9: rgb(236, 245, 255);
     --wm-color-primary-dark-2: rgb(51, 126, 204);
     
     --wm-color-success: #67c23a;
     --wm-color-success-light-3: rgb(149, 212, 117);
     --wm-color-success-light-5: rgb(179, 225, 157);
     --wm-color-success-light-7: rgb(209, 237, 196);
     --wm-color-success-light-8: rgb(225, 243, 216);
     --wm-color-success-light-9: rgb(240, 249, 235);
     --wm-color-success-dark-2: rgb(82, 155, 46);
     --wm-color-warning: #e6a23c;
     ```

     