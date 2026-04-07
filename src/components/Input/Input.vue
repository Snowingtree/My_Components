<template>
    <div
        class="wm-input"
        :class="{
            [`wm-input--${type}`]:type,
            [`wm-input--${size}`]:size,
            'is-disabled':disabled,
            // 下面是判断插槽是否存在,一共四个插槽
            'is-prepend':$slots.prepend,
            'is-append':$slots.append,
            'is-prefix':$slots.prefix,
            'is-suffix':$slots.suffix,
            'is-isFocus':isFocus,
        }"
    >
        <!-- 这里可能会渲染一个普通的输入框，或者一个文本输入框 -->

        <!-- input -->
        <template v-if="type !== 'textarea'">
             <!-- prepend slots -->
            <div class="wm-input__prepend"
                v-if="$slots.prepend"
            >
                <slot name="prepend"> </slot>
            </div>
            <div
                class="wm-input__wrapper"
            >
                <!-- prefix slots -->
                <span class="wm-input__prefix"
                    v-if="$slots.prefix"
                >
                    <slot name="prefix"> </slot>
                </span>
                
                <!-- 真正的输入框 -->
                <input 
                    :type=" showPassword ? (passwordVisible?'text':'password'): type"
                    v-bind="attrs"
                    class="wm-input__inner"
                    :disabled="disabled"
                    v-model="innerValue"
                    @input="handleInput"
                    :class="{
                        'is-clearable':clearable,
                    }"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChange"

                    :placeholder="placeholder"
                    :readonly="readonly"
                    :autocomplete="autocomplete"
                    :form="form"
                    :autofocus="autofocus"

                    ref="inputRef"
                >      

                <!-- suffix slots -->
                <span class="wm-input__suffix"
                    v-if="$slots.suffix || showClear || showPasswordArea"
                    @click="keepFocus"
                >
                    <slot name="suffix"> </slot>
                    <!-- 清除图标 -->
                    <Icon 
                        icon="circle-xmark"
                        v-show="showClear"
                        class="wm-input__clear"
                        @click="clickIcon"
                        @mousedown.prevent="NOOP"
                    ></Icon>
                    <!-- 显示密码图标 -->
                    <Icon 
                        icon="eye" 
                        v-if="showPasswordArea && passwordVisible" 
                        class="wm-input__password"
                        @click="changePasswordVisible"
                    >

                    </Icon>
                    <!-- 隐藏密码图标 -->
                    <Icon 
                        icon="eye-slash" 
                        v-if="showPasswordArea && !passwordVisible" 
                        class="wm-input__password"
                        @click="changePasswordVisible"
                    >
                    </Icon>
                </span>
            </div>
             <!-- append slots -->
            <div class="wm-input__append"
                v-if="$slots.append"
            >
                <slot name="append"> </slot>
            </div>
        </template>

        <!-- textarea -->
        <template v-else>
            <textarea 
                v-bind="attrs"
                class="wm-textarea__wrapper" 
                :disabled="disabled"
                v-model="innerValue"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"

                :placeholder="placeholder"
                :readonly="readonly"
                :autocomplete="autocomplete"
                :form="form"
                :autofocus="autofocus"
                ref="inputRef"
            ></textarea>
        </template>
    </div>
</template>

<script lang="ts">
export default {
    name:"WMInput",
    // 防止父组件传递过来,子组件未使用props接受的参数自动挂载到子组件中
    // 而不是继续往下传递
    inheritAttrs: false
}
</script>

<script lang="ts" setup>
    import { watch,ref,computed, useAttrs, nextTick } from "vue";
    import type {InputProps,InputEmits,InputInstance} from "./type"
    import Icon from "../Icon/Icon.vue";
    import type {Ref} from "vue"
    const props = withDefaults(defineProps<InputProps>(),{
        type:"text",
        autocomplete:"off"
    })
    const attrs = useAttrs();//获取为声明的属性
    const emits = defineEmits<InputEmits>();

    let innerValue = ref(props.modelValue);     
    const handleInput = ()=>{
        emits("update:modelValue",innerValue.value);
        emits("input",innerValue.value);
    }
    const handleChange = ()=>{
        emits("change",innerValue.value);
    }
    // 监视初始值
    watch(()=>props.modelValue,(newValue)=>{
        innerValue.value = newValue;
    })

    // 是否是focus状态
    const isFocus = ref(false);
    const passwordVisible = ref<boolean>(false)
    // 计算判断icon是否应该展示
    const showClear = computed(()=>{
        return  props.clearable && !props.disabled && isFocus.value &&  !!innerValue.value
    })
    // 响应式判断当前应该显示什么图标
    const showPasswordArea = computed(()=>{
        return props.showPassword && !props.disabled && !!innerValue.value;
        // 当内容为空的时候也不用展示
    }) 

    // 聚焦和失焦
    const handleFocus = (e:FocusEvent)=>{
        isFocus.value = true;
        emits("focus",e);
    }
    const handleBlur = (e:FocusEvent)=>{
        isFocus.value = false;
        emits("blur",e);
    }

    // 点击图标消失
    const clickIcon = ()=>{
        innerValue.value = "";
        emits("update:modelValue",innerValue.value);
        emits("input",innerValue.value);
        emits("change",innerValue.value);
        emits("clear"); 
        // console.log("clear")
    }

    // 点击是否展示密码
    const changePasswordVisible = ()=>{
        passwordVisible.value = !passwordVisible.value;
    }

    // 暴露input
    const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>()
    const keepFocus = async ()=>{
        await nextTick();
        inputRef.value?.focus();
    }
    defineExpose<InputInstance>({
        ref: inputRef
    })

    // NOOP表示空函数
    // 这里实际上是阻止mousedown继续冒泡，导致blur事件被触发
    const NOOP = ()=>{}
</script>
<style>

</style>