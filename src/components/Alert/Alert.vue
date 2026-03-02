<template>
    <Transition name="alert">
        <div
            class="wm-alert"
            :class="{
                [`wm-alert--${type}`]:type,
                [`wm-alert--${effect}`]:effect,
                'closable':closable,
                'is-center':center
            }"
            v-show="isShow"
        >
            <div class="wm-alert__content">
                <Icon :icon="icon" v-if="icon" size="xs" class="wm-alert__beforeicon"></Icon>
                <slot>{{ title }}</slot>
            </div>
            <Icon icon="x" size="2xs" class="wm-alert__close" @click="closeAlert"></Icon>
        </div>
    </Transition>
</template>

<script lang="ts">
export default {
    name:"WMAlert"
}
</script>

<script lang="ts" setup>
    import type { AlertProps ,Instance} from './type';
    import Icon from '../Icon/Icon.vue';
    import {ref} from "vue";
    
    withDefaults(defineProps<AlertProps>(),{
        effect:"light",
        center:false
    });

    let isShow = ref<boolean>(true);
    function closeAlert(){
        isShow.value = !isShow.value;
    }

    // 这里把事件暴露出去，可以配合setTimeout让其自动的关闭
    defineExpose<Instance>({
        "close":closeAlert
    })
</script>
<style scoped>

</style>