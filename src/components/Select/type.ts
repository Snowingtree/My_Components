export interface SelectOption{
    label:string,
    value:string,
    disabled?:boolean,
}

export interface SelectProps{
    modelValue:string,
    // 选项
    options?:SelectOption[],

    // 基础的表单属性
    placeholder?:string,
    disabled?:boolean,
}

// 暴露给外面的事件
export interface SelectEmits{
    (e:"change",value:string):void,
    (e:"update:modelValue",value:string):void,
    (e:"visible-change",value:boolean):void,//用来控制下拉菜单开关状态
}

// 展示当前选择了哪一个值
export interface SelectStates{
    inputValue:string,// 用来记录当前选中的item的value
    selectedOption:null | SelectOption,//当前选择的item
}