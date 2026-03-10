import type { VNode ,ComponentInternalInstance} from "vue";

export interface MessageProps{
    message?: string | VNode, //传入的消息
    duration?:number,//可维持的时间，如果为0，就一直不关闭
    showClose?:boolean,//是否显示关闭的按钮
    type?:"success" | "warning" | "danger" | "info",
    offset?:number,//两个message之间的间距

    //通过vnode传入
    id:string,
    destroy:()=>void,
    zIndex?:number,
}

export type createMessageProps = Omit<MessageProps,"id" | "destroy" | "zIndex">; 

export interface MessageInfo {
    id:string,
    vNode:VNode,
    props:MessageProps,
    vm:ComponentInternalInstance
    destroy:()=>void, //这是为了和message中的删除统一
}