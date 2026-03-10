import { onMounted,onBeforeUnmount ,watch, isRef,unref} from "vue";
import type {Ref} from "vue"

export default function useEventListener(
    target:Ref<EventTarget | null> | EventTarget,
    event:string,
    handler:(e:Event)=>void
){
    if(isRef(target)){
        watch(target,(newValue,oldValue)=>{
            oldValue?.removeEventListener(event,handler);
            newValue?.addEventListener(event,handler);
        })
    }else{
        onMounted(()=>{
            target.addEventListener(event,handler);
        })
    }

    // unref,用于解开ref，如果是ref，就返回value的值，如果不是，就直接返回值
    onBeforeUnmount(()=>{
        unref(target)?.removeEventListener(event,handler);
    })

}