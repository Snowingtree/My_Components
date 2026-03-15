<template>
    <div 
        class="wm-select"
        :class="{
            'is-disabled':disabled 
        }"
        @click="toggleDropdown"
    >
        <Tooltip
            placement="bottom-start"
            manual
            ref="tooltipRef"
            :popOptions="popOptions"
            @clickOutSize="clickOutSize"
        >
            <Input 
                v-model="states.inputValue"
                :placeholder="placeholder"
                :disabled="disabled"
                readonly
                ref="inputRef"
            >
            <template #suffix>
                <Icon icon="angle-down" class="header-angle" :class="{'is-active':isDropdowmShow}"></Icon>
            </template>
            </Input>
            <template v-slot:content>
                <ul class="wm-select-menu">
                    <!-- 这里使用template包括，方便后续添加分割线等 -->
                    <template v-for="(item,index) in options" :key="index">
                        <li
                            class="wm-select_menu-item"
                            :class="{'is-disabled':item.disabled,'is-selected':states.selectedOption?.value === item.value}"
                            :id="`select-item-${item.value}`"
                            @click.stop="itemSelect(item)"
                        >
                        {{ item.label }}
                        </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>

<script lang="ts">
export default {
    name:"WMSelect"
}
</script>

<script lang="ts" setup>
    import type { SelectEmits,SelectOption,SelectProps,SelectStates} from './type';
    import Tooltip from '../Tooltip/Tooltip.vue';
    import Input from '../Input/Input.vue';
    import { reactive, ref, type Ref } from 'vue';
    import type {TooltipInstance} from "../Tooltip/type"
    import type {InputInstanceFather} from "@/components/Input/type"
    import Icon from '../Icon/Icon.vue';

    const props = withDefaults(defineProps<SelectProps>(),{

    });
    const emits = defineEmits<SelectEmits>();
    const popOptions:any = {
        modifiers:[
            {
                name:"offset",
                options:{
                    offset:[0,6]
                }
            },
            // 这里主要是让浮动展示的框和我的Input对齐
            {
                name: "sameWidth",
                enabled: true,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: ({state}:{ state:any }) => {
                    state.styles.popper.width = `${state.rects.reference.width}px`;
                },
            }
        ],
    }

    const inputRef = ref() as Ref<InputInstanceFather>;  
    const findOptions = (value:string | number)=>{
        const option = props.options?.find(opt => opt.value === value);
        return option?option:null;
    }

    const initialOption = findOptions(props.modelValue);
    const states = reactive<SelectStates>({
        inputValue:initialOption?initialOption.label:"",
        selectedOption:initialOption,
    })
    const tooltipRef = ref<TooltipInstance>();
    const isDropdowmShow = ref(false);// 用来控制下拉菜单是否打开

    const controlDropdown = (show:boolean)=>{
        if(show){
            tooltipRef.value?.show();
        }else{
            tooltipRef.value?.hidden();
        }
        // 更新响应式的值
        isDropdowmShow.value = show;
        emits("visible-change",show);
    }
    const toggleDropdown = ()=>{
        if(props.disabled) return;

        if(isDropdowmShow.value){
            controlDropdown(false);
        }else{
            controlDropdown(true);
        }
    }
    // 点击谁就显示谁
    const itemSelect = (e:SelectOption)=>{ 
        if(e.disabled) return;
        states.inputValue = e.label;
        states.selectedOption = e;
        emits("change",e.label)
        emits("update:modelValue",e.label)
        controlDropdown(false);
        inputRef.value?.ref?.focus();
    }

    // 点击外部
    const clickOutSize = (e:boolean)=>{
        controlDropdown(false);
    }


</script>
