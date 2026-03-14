
// 属性
export interface InputProps {
    type?: "text" | "textarea" | "password", //正常输入 | 文本 | 密码
    size?: "large" | "small",
    clearable?:boolean,//清除按钮
    showPassword?:boolean,//展示密码
    disabled?:boolean, //是否禁用
    modelValue:string,//用于实现组件双向绑定

    // 支持表单的原始属性
    placeholder?:string, //默认内容
    readonly?:boolean,  //是否只读
    autocomplete?:string, //提示内容
    form?:string,// 绑定的表单
    autofocus?:boolean,//加载页面是否自动获取焦点
}

// 暴露给外面的事件
export interface InputEmits{
    (e:"update:modelValue",value:string):void, //修改
    (e:"input",value:string):void, //输入,值修改就会触发
    (e:"change",value:string):void, //改变，要求值被修改，且触发失焦Blur
    (e:"focus",value:FocusEvent):void,//聚焦
    (e:"blur",value:FocusEvent):void,//失去焦点
    (e:"clear"):void,//清空,点击清空按钮
}

// 暴露当前组件的实例
export interface InputInstance {
    ref:HTMLInputElement | HTMLTextAreaElement,
}