<template>
  <button
    class="wm-button"
    :class="{
        [`wm-button--${type}`]:type,
        [`wm-button--${size}`]:size,
        'is-plain':plain,
        'is-circle':circle,
        'is-round':round,
        'is-disabled':disabled,
        'is- loading':loading,
    }"
    :disabled = "disabled || loading" 
    :autofocus = "autofocus"
    :type = "nativeType"
    ref="_ref"
  >
    <!-- 等待的图标 -->
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
        <!-- 让组件中的内容，在这里呈现 -->
        <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
export default {
    name:"WMButton"
}
</script>

<script lang="ts" setup>
    // 这里需要注意，当导入的是类型的时候，需要加上type
    import type {ButtonProps,ButtonType,ButtonSize} from "./types"
    import Icon from "../Icon/Icon.vue";
    import { ref } from "vue";
    // 接受参数,添加默认值
    withDefaults(defineProps<ButtonProps>(),{
        nativeType:"button",
    });

    // 用于保留HTML的按钮元素
    let _ref = ref<HTMLButtonElement>();
    defineExpose({
        ref:_ref
    })
</script>
<style>

</style>