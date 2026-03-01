import type {Ref,InjectionKey} from "vue"

export type NameType = string | number;

// 给CollapseItem接受数据的规则
export type CollapseItemProps = {
    name:NameType,
    title?:string,
    disabled?:boolean,
}

// 定义Collapse传入CollapseItem的数据
export interface CollapseContext{
    activeName:Ref<NameType[]>,
    handleItemClick:(item:NameType)=>void,
} 

// 由于需要使用provide给后代传递数据，所以需要独一无二的key，这里用Symbol
export const collapsecontextkey = Symbol("CollapseContext") as InjectionKey<CollapseContext>;

// 实现自己组件的v-model
export interface CollapseProps{
    modelValue:NameType[],
    accordion?:boolean,
}
export interface CollapesEmits{
    (e:"update:modelValue",value:NameType[]):void,
    (e:"change",value:NameType[]):void, 
}