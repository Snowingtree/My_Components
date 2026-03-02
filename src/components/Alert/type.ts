// 声明接口
export interface AlertProps{
    title?:string,
    type?:"primary" | "success" | "warning" | "danger" | "info",
    effect?:"light" | "dark",
    closable?:boolean,
    center?:boolean,
    icon?:string,
}

// 把关闭事件暴露出去
export interface Instance{
    close:()=>void
}