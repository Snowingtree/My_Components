import type { VNode } from "vue";

// 支持虚拟节点，即自定义的格式
export type RenderLabelFunc = (e:SelectOption)=>VNode 
// 自定义的筛选
export type CustomFilterFunc = (value:string)=>SelectOption[]
// 支持远程搜索
export type CustomFilterRemoteFunc = (value:string)=>Promise<SelectOption[]>


export interface SelectOption{
    label:string,
    value:string | number,
    disabled?:boolean,
}

export interface SelectProps{
    modelValue:string | number,
    // 选项
    options?:SelectOption[], //由于开启了远程搜索，这个选项可以是远程获取的
    clearable?:boolean,//是否有清空按钮
    renderLabel?:RenderLabelFunc

    // 是否开始筛选
    // 是否是使用自定义的筛选
    filterable?:boolean,
    customfilter?:CustomFilterFunc,

    // 是否开启远程联想
    remote?:boolean,
    customfilterremote?:CustomFilterRemoteFunc

    // 基础的表单属性
    placeholder?:string,
    disabled?:boolean,
}

// 暴露给外面的事件
export interface SelectEmits{
    (e:"change",value:string):void,
    (e:"update:modelValue",value:string):void,
    (e:"visible-change",value:boolean):void,//用来控制下拉菜单开关状态
    (e:"clear"):void,
}

// 展示当前选择了哪一个值
export interface SelectStates{
    inputValue:string,// 用来记录当前选中的item的value
    selectedOption:null | SelectOption,//当前选择的item
    isHover:boolean,//是否悬浮
    loading:boolean,//获取远程搜索，是否是等待状态
    highlightIndex:number,//当前的下拉菜单高亮的位置
}
