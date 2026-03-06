import { onMounted, onUnmounted, type Ref} from "vue"

export const useClickOutside = (elementRef:Ref<undefined | HTMLElement>,callback:()=>void)=>{
    // 当点击的DOM和传入的DOM相同时，不执行逻辑
    const handler = (e:MouseEvent)=>{
        if(elementRef.value && e.target){
            if(!elementRef.value.contains(e.target as HTMLElement)){
                console.log(elementRef.value.contains(e.target as HTMLElement))
                callback();
            }
        }
    };

    onMounted(()=>{
        document.addEventListener("click",handler);
    })

    onUnmounted(()=>{
        document.removeEventListener("click",handler);
    })
}