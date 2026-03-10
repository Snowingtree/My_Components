<template>
    <Transition name="fade" @after-leave="onAfterLeave">
        <div
            class="wm-message"
            role="alert"
            :class="{
                [`wm-message--${type}`]:type,
                'is-close':showClose,
            }"
            v-show="visible "
            ref="messageRef"
            :style="cssStyle"
            @mouseenter="closeTime"
            @mouseleave="startTime"
            >
            <div class="wm-message__content">
                <slot><RenderVnode :vNode="message" v-if="message"></RenderVnode></slot>
            </div>
            <div class="wm-message__close" v-if="showClose">
                <Icon icon="x" @click.stop="visible = false"></Icon>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
export default {
    name:"WMMessage"
}
</script>

<script lang="ts"  setup>
    import type {MessageProps} from "./type"
    import RenderVnode from "../common/RenderVnode";
    import Icon from "../Icon/Icon.vue";
    import {computed, h, nextTick, onMounted, ref, watch} from "vue"
    import {getLastInstanceBottom} from "./method"
    import useEventListener from "../../hooks/useEventListener"
import { start } from "@popperjs/core";

    const props = withDefaults(defineProps<MessageProps>(),{
        type:"info",
        duration:3000, 
        showClose:false,
        offset:20
    })
    let visible = ref<boolean>(false);
    const messageRef = ref<HTMLDivElement>();
    function keydown(e:Event){
        const event = e as KeyboardEvent;
        if(event.code === "Escape"){
            visible.value = false;
        }
    }
    useEventListener(document,"keyup",keydown);

    let timer:any
    // 函数，开启定时器
    const startTime = ()=>{
        if(props.duration === 0) return;

        timer = setTimeout(()=>{
            visible.value = false;
        },props.duration);
    }
    const closeTime = ()=>{
        clearTimeout(timer)
    }

    
    ///////////////////////////////计算偏移高度///////////////////////////////
    //计算偏移的高度
    let height = ref(0);
    // 上一个元素的bottom,这里需要计算属性，当上一个消失的时候需要重新计算
    let lastHeight = computed(() => getLastInstanceBottom(props.id));
    // 当前元素的top
    let topOffset = computed(() => props.offset + lastHeight.value); 
    // 为下一个元素预留offset，就是当前元素的bottom
    let bottomOffset = computed(() => topOffset.value + height.value);

    const cssStyle = computed(() => ({
        top:topOffset.value + "px",
        zIndex:props.zIndex,
    }))

    // 把底部暴露出去给下一个Message使用
    defineExpose({
        bottomOffset,
        visible,
    });

    ////////////////////////////////////////////////////////////////////////


    onMounted(async ()=>{
        visible.value = true;

        await nextTick(); //等待DOM节点更新之后再执行下面的逻辑
        height.value = messageRef.value!.getBoundingClientRect().height; 
    })

    // 这里和之前一样，动画之后再销毁他
    function onAfterLeave(){
        props.destroy();
    }

    
</script>

<style>

</style>