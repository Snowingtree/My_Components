import type {TooltipProps} from "./../Tooltip/type"
import type { VNode } from "vue"


export interface menuOptions{
    label:string | VNode, //
    key:string | number,
    disabled?:boolean,//是否禁用
    divided?:boolean,//不同选项之间是否有分割线，加在头上
}
export interface DropdownProps extends TooltipProps{
    menu:menuOptions[],
    hideAfterClick?:boolean,//点击之后是否关闭
}

// 事件
export interface DropdownEmits{
    (e:"visible-change",value:boolean):void,
    (e:"select",value:menuOptions):void,
}

// 暴露给外面调用的实例方法
export interface DropdownInstance{
    show:()=>void,
    hidden:()=>void
}
