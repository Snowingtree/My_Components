import type {Placement,Options} from "@popperjs/core"

// 外部传入的属性
export interface TooltipProps{
    content?:string, //内容
    trigger?: "click" | "hover", //触发的模式 
    placement?:Placement, //放置的位置
    manual?:boolean,//是否手动触发,即外部调用触发

    // popperjs自带的参数
    popOptions?:Partial<Options>

    // 添加动画
    transition?:string,

    // 开关延迟
    openDelay?:number,
    closeDelay?:number,
}

// 外部事件，是否展示
export interface TooltipEmits{
    (e:"visible-change",value:boolean):void,
    (e:"clickOutSize",value:boolean):void,//点击外面了，发射事件给外部组件使用
}

// 外部调用的方法
export interface TooltipInstance{
    show:()=>void,
    hidden:()=>void,
}