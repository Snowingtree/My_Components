import {render,h, shallowReactive} from "vue"
import type { createMessageProps } from "./type";
import Message from "./Message.vue"

import type { MessageInfo } from "./type";

import {useZIndex} from "./../../hooks/useZIndex"

// 这里需要使用响应式的数据，不然在getLastInstanceBottom的时候，上一个实例可能没有push进去
// 响应式能够保证当上一个实例被push进去的时候,数据状态会更新
let instances:MessageInfo[] = shallowReactive([]);
let seed = 1;
export const createMessage = (props:createMessageProps)=>{
    const {nextZIndex} = useZIndex();
    const contain = document.createElement("div");
    let id = `message_${seed ++}`;
    let destroy = ()=>{
        const idIndex = instances.findIndex((item)=>item.id === id);
        if(idIndex === -1) return ;
        instances.splice(idIndex,1);
        render(null,contain);
    }
    let newProps = {
        ...props,
        zIndex:nextZIndex(),
        id:id,
        destroy:destroy,
    }
    const messageDelete = ()=>{
        const idIndex = instances.findIndex((item)=>item.id === id);
        if(idIndex === -1) return ;
        instances[idIndex]!.vm.exposed!.visible.value = false;
    }

    const vnode = h(Message,newProps);
    render(vnode,contain);
    // ! 加在后面是ts中的非空断言操作符，表示当前变量不会是null或者undefined
    document.body.appendChild(contain.firstElementChild!)

    // 需要让vnode先挂载之后，vnode.component才有值
    const instance:MessageInfo = {
        id:id,
        vNode:vnode,
        props:newProps,
        vm:vnode.component!,
        destroy:messageDelete,
    }
    instances.push(instance);
    return instance;
}

// 返回最后一个Message的信息
export const getLastInstance = ()=>{
    return instances.length > 0 ? instances[instances.length - 1]:undefined
}

// 返回上一个Message的bottom的位置信息
export const getLastInstanceBottom = (id:string)=>{
    const idx = instances.findIndex((item)=>item.id === id);
    if(idx <= 0){
        // 说明是第一项
        return 0;
    }else{
        const prev = instances[idx - 1];
        return prev!.vm.exposed!.bottomOffset.value
    }
}

// 将暴露出来的visible设置成false

