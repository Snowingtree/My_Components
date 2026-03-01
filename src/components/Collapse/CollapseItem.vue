<template>
    <div
        class="wm-collapse-item"
        :class="{
            'is-disabled':disabled,
        }"
    >
        <div class="wm-collapse-item__header"
            :class="{
                'is-active':isShowItem,
                'is-disabled':disabled,
            }" 
            :id="`item-header-${name}`" 
            @click="handleClick"
        >
            <!-- 对于具名插槽，如果没有传入，那就就会自动渲染插槽里面的内容，例如title -->
            <slot name="title">{{ title }}</slot>
        </div>
        <Transition name="slide"
            v-on="transitionEvents"
        >
            <div class="wm-collapse-item__warpper" v-show="isShowItem"> 
                <div class="wm-collapse-item__content" :id="`item-content-${name}`">
                <slot></slot>
                </div>
            </div>
        </Transition>

    </div>
</template> 

<script lang="ts">
export default {
    name:"WMCollapseItem",
}
</script>

<script setup lang="ts">
    import { inject ,computed, Transition} from "vue";
    import type {CollapseItemProps} from "./types"
    import {collapsecontextkey} from "./types"
    
    const props = defineProps<CollapseItemProps>()

    const collapsecontext = inject(collapsecontextkey);

    // 计算是否展示content
    let isShowItem = computed(()=>{
        return collapsecontext?.activeName.value.includes(props.name);
    })

    // 进行包装，如果处于禁用，就不管，否则就进行状态修改(折叠/展开)
    const handleClick = ()=>{
        if(props.disabled){
            return;
        }
        // 状态修改
        collapsecontext?.handleItemClick(props.name);
    }

    const transitionEvents : Record<string,(el:HTMLElement)=>void> = {
        beforeEnter(el){
            el.style.height = "0px";
            el.style.overflow = "hidden";
        },
        enter(el){
            el.style.height = `${el.scrollHeight}px`;
        },
        afterEnter(el){
            el.style.height = "";
            el.style.overflow = "";
        },
        beforeLeave(el){
            el.style.height = `${el.scrollHeight}px`;
            el.style.overflow = "hidden";
        },
        Leave(el){
            el.style.height = "0px";
        },
        afterLeave(el){
            el.style.height = "";
            el.style.overflow = "";
        }
    }

</script>
<style scoped> 

</style>