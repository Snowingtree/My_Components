// 这个文件夹主要写各个选择的样式

// 按钮的样式
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";

// 按钮的大小
export type ButtonSize = "large" | "small";

// 上面都是自定义的属性，在封装组件的时候需要对原生的样式进行支持
export type ButtonNative = "button" | "submit" | "reset";

// 所有的类型都是可选的，不选就是默认值
export interface ButtonProps{
    type?: ButtonType;
    size?: ButtonSize,
    plain?:boolean, //样式展示不同的形式，有背景填充和无背景填充
    round?: boolean,//圆角
    circle?:boolean,//圆形按钮
    disabled?:boolean,//禁用
    nativeType?:ButtonNative,
    autofocus?:boolean,
    icon?:string, //想要什么图标就传进来
    loading?:boolean,
}

// 按钮的类型
export interface ButtonInstance{
    ref:HTMLButtonElement,
}
