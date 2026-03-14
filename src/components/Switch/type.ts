export type SwitchValueType = boolean | number | string;

export interface SwitchProps{
    modelValue?:SwitchValueType ,
    disabled?:boolean,
    activeText?:string,//激活时的文字
    inactiveText?:string,//不激活时的文字
    activeValue?:SwitchValueType,//激活时的值
    inactiveValue?:SwitchValueType,//未激活时的值
    name?:string,
    id?:string,
    size?:'small' | 'large',
}

export interface SwitchEmits{
    (e:"change",value:SwitchValueType):void
    (e:"update:modelValue",value:SwitchValueType):void
}