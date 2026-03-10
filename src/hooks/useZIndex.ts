import { computed, ref } from "vue"

const zIndex = ref(0);
export const useZIndex = function(initialValue = 2000){
    const initialZIndex = ref(initialValue)
    const currentZindex = computed(()=>initialZIndex.value + zIndex.value);
    const nextZIndex = ()=>{
        zIndex.value ++;
        return currentZindex.value;
    }

    return {
        initialZIndex,
        currentZindex,
        nextZIndex,
    }
}