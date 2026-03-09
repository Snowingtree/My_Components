<template>
    <div class="wm-tooltip" 
        ref="fatherNode"
        v-on="outEvents"
        >
        <!-- 触发区域 -->
        <div class="wm-tooltip__trigger" 
            ref="triggerNode"
            v-on = "events"
            >
            <!-- 触发区域可能是复杂内容 -->
            <slot></slot>
        </div>
        <!-- 展示区域 -->
         <Transition :name="transition"  @after-leave="onAfterLeave">
            <div class="wm-tooltip__popper" 
                ref="popperNode"
                v-show="isOpen"
                >
                <!-- 内容区域也要支持自定义 -->
                <slot name="content">
                    {{ content }}
                </slot>
                <div id="arrow" data-popper-arrow></div>
            </div>
         </Transition>

    </div>
</template>

<script lang="ts">
export default {
    name:"WMTooltips"
}
</script>

<script setup lang="ts">
    import { onMounted, reactive, ref, watch,onUnmounted ,computed} from 'vue';
    import type { TooltipEmits,TooltipProps ,TooltipInstance} from './type';
    import {createPopper, offset} from "@popperjs/core"
    import type { Instance } from '@popperjs/core';

    import { debounce } from 'lodash-es';
    
    // hooks
    import {useClickOutside} from "../../hooks/useClickOutside"  
    const props = withDefaults(defineProps<TooltipProps>(),{
        placement:"bottom",
        trigger:"hover",
        transition:"fade",
        openDelay:0,
        closeDelay:0
    })
    const popOptions = computed(()=>{
        return {
            placement:props.placement,
            modifiers:[
                {
                    name:"offset",
                    options:{
                        offset:[0,6]
                    }
                },
            ],
            ...props.popOptions,
        }
    })
    // 声明能触发的事件
    const emits = defineEmits<TooltipEmits>()
    const isOpen = ref<boolean>(false); 

    // 获取两个DOM节点，用于popper的展示和触发
    const popperNode = ref<HTMLElement>();
    const triggerNode = ref<HTMLElement>();
    const fatherNode = ref<HTMLElement>();

    let popperInstance:Instance | null = null;

    const closeOutSide = ()=>{
        // 需要是click模式使用
        if(props.trigger === "click" && isOpen.value === true && !props.manual){
            close();
        }
    }
    // 使用hook
    useClickOutside(fatherNode,closeOutSide);

    // 开关
    const open = ()=>{
        isOpen.value = true;
        // 
        emits("visible-change",isOpen.value);
    }
    const close = ()=>{
        isOpen.value = false;
        emits("visible-change",isOpen.value);
    }
    
    // 防抖，只执行最后一次
    const openDebounce = debounce(open,props.openDelay);
    const closeDebounce = debounce(close,props.closeDelay);

    // 防抖,并且取消另一个的最后一次
    const openFinal = ()=>{
        closeDebounce.cancel();
        openDebounce();
    }
    const closeFinal = ()=>{
        openDebounce.cancel();
        closeDebounce();
    }

    // 触发事件修改isOpen的值
    const changeOpen = () =>{
        if(isOpen.value === true){
            closeFinal();
        }else{
            openFinal();
        }
    }

    let events = reactive<Record<string,any>>({})
    let outEvents = reactive<Record<string,any>>({})

    const attachEvents = ()=>{
        if(props.trigger === "click"){
            events["click"] = changeOpen
        }else if(props.trigger === "hover"){
            events["mouseenter"] = openFinal;
            outEvents["mouseleave"] = closeFinal;
        }
    }

    // 动画
    const onAfterLeave = () => {
        popperInstance?.destroy()
    }


    watch(()=>props.manual,(newValue)=>{
        if(newValue){
            // 如果是true，即需要手动触发，那就把所有的事件清空
            Object.keys(events).forEach(key => delete events[key]);
            Object.keys(outEvents).forEach(key => delete outEvents[key]);
        }else{
            // 如果不是，就直接和之前一样
            attachEvents();
        }
    })

    watch(isOpen,(newValue)=>{
        // 如果显示，就创建实例
        if(newValue){
            if(triggerNode.value && popperNode.value){
                popperInstance = createPopper(triggerNode.value,popperNode.value,popOptions.value)
            }
        }
        // 这个销毁放在动画结束后执行，否则会导致动画没结束，就直接被销毁了
        // else{
        //     // 不显示，销毁实例
        //     popperInstance?.destroy();
        // }
    },{
        // 需要在DOM节点更新之后调用，由于点击状态更新，上面节点不显示，如果在DOM更新前调用，节点没渲染出来导致更新失败
        flush:"post",
    })

    // 重新watch，由于trigger是父元素传递下来了，和之前一样，防止异步修改
    watch(()=>props.trigger,(newValue,oldValue)=>{
        if(newValue !== oldValue){
            // 必须清空，否则会重叠
            // 且这里不能直接赋值，否则会直接丢失reactive的响应式
            Object.keys(events).forEach(key => delete events[key]);
            Object.keys(outEvents).forEach(key => delete outEvents[key]);
            attachEvents();
        }
    })

    // 测试响应式是否还在
    // watch(events, (newVal) => {
    //     console.log('watch 触发：', newVal); // 关键：这里不会触发！
    // }, { deep: true });

    if(!props.manual){
        attachEvents();
    }
        

    // 暴露给实例
    defineExpose<TooltipInstance>({
        show:openFinal,
        hidden:closeFinal,
    })
    onUnmounted(()=>{
        popperInstance?.destroy();
    })
</script>
<style>

</style>