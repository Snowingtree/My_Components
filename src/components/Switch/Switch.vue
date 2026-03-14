<template>
    <div
        class="wm-switch"
        :class="{
            [`wm-switch--${size}`]:size,
            'is-disabled':disabled,
            'is-checked':checked,
        }"
        @click="switchValue"
    >
        <input 
            class="wm-switch__input"
            type="checkbox" 
            :name="name" 
            role="switch"
            :disabled="disabled"
            @keydown.enter="switchValue"
            ref="inputRef"
        >
        <!-- 下面的结构才是展示的样子 -->
        <div class="wm-switch__core"> 
            <!-- 显示开关的文字 -->
            <div class="wm-switch__core-inner">
                <span class="wm-switch__core-inner-text" v-if="activeText || inactiveText">
                    {{ checked?activeText:inactiveText }}
                </span>
            </div>
            <div class="wm-switch__core-action"></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name:"WMSwitch"
}
</script>

<script lang="ts" setup>
    import { computed, onMounted, ref, watch } from 'vue';
    import type { SwitchEmits,SwitchProps } from './type';

    const props = withDefaults(defineProps<SwitchProps>(),{
        activeValue:true,
        inactiveValue:false,
        // activeText:"Yes",
        // inactiveText:"No",
    })
    const emits = defineEmits<SwitchEmits>();
    const innerValue = ref(props.modelValue);

    const checked = computed(()=>{
        if(innerValue.value === props.activeValue){
            return true;
        }else{
            return false;
        }
    })
    const inputRef = ref<HTMLInputElement>();

    // 点击触发
    const switchValue = ()=>{
        if(props.disabled) return;
        const newValue = checked.value ? props.inactiveValue:props.activeValue;
        innerValue.value = newValue;
        emits("change",newValue);
        emits("update:modelValue",newValue);
    }
    
    onMounted(()=>{
        inputRef.value!.checked = checked.value
    })

    watch(checked,()=>{
        inputRef.value!.checked = checked.value
    })
    watch(()=>props.modelValue,(newValue)=>{
        innerValue.value = newValue;
    })
</script>

<style>

</style>