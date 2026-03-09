<template>
    <div class="wm-dropdown">
        <Tooltip
            :trigger="trigger"
            :placement="placement"
            :pop-options="popOptions"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            @visible-change="visibleChange"
            ref = "tooltopRef"
        >
            <!-- 这是标题，写在Dropdown的标签会插入到这个位置-->
            <slot></slot>
            <!-- 这是二次封装，这个插槽会插入到Tooltip组件的content的位置 -->
            <template v-slot:content>
                <ul class="wm-dropdown__menu">
                    <!-- 这里用template是因为这是一个无渲染容器，只负责包裹逻辑，且这里是ul里面，只能写li，不能写div -->
                    <template v-for="item in menu" :key="item.key">
                        <li v-if="item.divided"
                            class="divided-placeholder"
                            role="separator" 
                        ></li>
                        <li
                            class="wm-dropdown__item"
                            :class="{'is-disabled':item.disabled,'is-divided':item.divided}"
                            :id="`dropdown-item-${item.key}`"
                            @click="itemClick(item)"
                        >
                            <RenderVnode :vNode="item.label"></RenderVnode>
                        </li>

                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>

<script lang="ts">
export default {
    name:"WMDropdown",
}
</script>

<script lang="ts" setup>
    import type { DropdownEmits,DropdownProps,menuOptions,DropdownInstance} from './type';
    import Tooltip from '../Tooltip/Tooltip.vue';
    import type {TooltipInstance} from "../Tooltip/type"
    import { ref, type Ref } from 'vue';
    import RenderVnode from "../common/RenderVnode"

    const props = withDefaults(defineProps<DropdownProps>(),{
        hideAfterClick:true
    });
    const emits = defineEmits<DropdownEmits>();

    // 就是把tooltip里面的事件传递出去
    const visibleChange = (e:boolean)=>{
        emits("visible-change",e)
    }

    const itemClick = (e:menuOptions)=>{
        if(!e.disabled){
            emits("select",e);
            if(props.hideAfterClick){
                tooltopRef.value?.hidden();
            }
        }
    }

    // 拿到实例
    const tooltopRef = ref<TooltipInstance>() 
    defineExpose<DropdownInstance>({
        show:()=>tooltopRef.value?.show(),
        hidden:()=>tooltopRef.value?.hidden(),
    })
</script>
<style>

</style>