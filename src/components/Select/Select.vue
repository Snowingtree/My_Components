<template>
    <div 
        class="wm-select"
        :class="{
            'is-disabled':disabled 
        }"
        @click="toggleDropdown"
        @mouseenter="states.isHover = true"
        @mouseleave="states.isHover = false"
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
                :placeholder="filteredPlaceholder"
                :disabled="disabled"
                :readonly="!filterable || !isDropdowmShow"
                ref="inputRef"
                @input="debounceOnFilter"
                @keydown="handleKeydown"
            >
            <template #suffix>
                <Icon 
                    icon="x" 
                    v-if="showClearIcon" 
                    class="wm-input__clear"
                    @click.stop = "ClearInput"
                ></Icon>
                <Icon 
                    v-else 
                    icon="angle-down" 
                    class="header-angle" 
                    :class="{'is-active':isDropdowmShow}"
                ></Icon>
            </template>
            </Input>
            <template v-slot:content>
                <div class="wm-select__loading" v-if="states.loading">
                    <Icon icon="spinner" spin></Icon>
                </div>
                <div class="wm-select__nodata" v-else-if="filterable && filterOption?.length === 0">no datta</div>
                <ul v-else class="wm-select-menu">
                    <!-- 这里使用template包括，方便后续添加分割线等 -->
                    <template v-for="(item,index) in filterOption" :key="index">
                        <li
                            class="wm-select_menu-item"
                            :class="{
                                'is-disabled':item.disabled,
                                'is-selected':states.selectedOption?.value === item.value,
                                'is-highlight':states.highlightIndex === index,
                            }"
                            :id="`select-item-${item.value}`"
                            @click.stop="itemSelect(item)"
                        >
                            <RenderVnode :vNode="renderLabel ? renderLabel(item):item.label"></RenderVnode>
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
    import { computed, reactive, readonly, ref, render, watch, type Ref } from 'vue';
    import type {TooltipInstance} from "../Tooltip/type"
    import type {InputInstanceFather} from "@/components/Input/type"
    import Icon from '../Icon/Icon.vue';
    import RenderVnode from "@/components/common/RenderVnode"
    import { debounce } from 'lodash-es';
    const props = withDefaults(defineProps<SelectProps>(),{
        options:()=>[]
    });
    const filterOption = ref<SelectOption[]>(props.options);
    const timeout = computed(()=>{
        // 判断是不是远程请求，是的话，防抖的事件就设置为300，不是就为0，直接找
        return props.remote? 300:0;
    })
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
    const filteredPlaceholder = computed(()=>{
        return (props.filterable && states.selectedOption && isDropdowmShow.value)?states.selectedOption.label:props.placeholder
    })
    const initialOption = findOptions(props.modelValue);
    const states = reactive<SelectStates>({
        inputValue:initialOption?initialOption.label:"",
        selectedOption:initialOption,
        isHover:false,
        loading:false,
        highlightIndex:-1,
    })
    const tooltipRef = ref<TooltipInstance>();
    const isDropdowmShow = ref(false);// 用来控制下拉菜单是否打开

    const controlDropdown = (show:boolean)=>{
        if(show){
            if(props.filterable && states.selectedOption){
                states.inputValue = "";
            }
            if(props.filterable){
                generateFilterOption(states.inputValue)
            }
            tooltipRef.value?.show();
        }else{
            tooltipRef.value?.hidden();
            if(props.filterable && states.selectedOption){
                states.inputValue = states.selectedOption? states.selectedOption.label:""
            }
            states.highlightIndex = -1;
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

    // 计算清空图标是否显现
    const showClearIcon = computed(()=>{
        return props.clearable &&
                states.inputValue.trim()  !== ""&&
                states.isHover &&
                states.selectedOption
    })

    // 清空
    const ClearInput = ()=>{
        emits("clear");
        emits("change","") 
        emits("update:modelValue","")
        states.inputValue = "";
        states.selectedOption = null;
    }

    // 监视外部传入的参数
    watch(()=>props.options,(newValue)=>{
        filterOption.value = newValue;
    })

    // 默认的筛选函数
    const generateFilterOption = async (value:string)=>{
        if(!props.filterable) return ;
        
        // 如果有自定义的筛选函数
        if(props.customfilter && typeof(props.customfilter) === "function"){
            filterOption.value = props.customfilter(value);
        }else if(props.remote && props.customfilterremote && typeof(props.customfilterremote) === "function"){
            // 如果开启了远程搜索
            states.loading = true;
            try{
                 filterOption.value = await props.customfilterremote(value);
            }catch(e){
                console.log(e);
                filterOption.value = []
            }finally{
                states.loading = false
            }
        }
        else{
            filterOption.value = props.options?.filter((item)=>item.label.includes(value))
        }

        // 这里添加是由于filter可能会不断的增加或者减少item，所以需要直接置为-1
        states.highlightIndex = -1;

    }

    const onFilter = ()=>{
        generateFilterOption(states.inputValue);
    }
    const debounceOnFilter = debounce(()=>onFilter(),timeout.value);

    // 支持键盘操作
    const handleKeydown = (e:KeyboardEvent)=>{
        switch (e.key){
            case "Enter":
                // 如果是关闭的，就打开，但是如果是打开的，就需要进行 选择 确认
                if(isDropdowmShow.value === false){
                    toggleDropdown();
                }else{
                    if(states.highlightIndex > -1 && filterOption.value[states.highlightIndex]){
                        itemSelect(filterOption.value[states.highlightIndex]!);
                    }else{
                        controlDropdown(false)
                    }
                }
                break;
            case "Escape":
                if(isDropdowmShow.value === true){
                    controlDropdown(false)
                }
                break;
            case "ArrowUp":
                e.preventDefault();
                if(filterOption.value?.length > 0){
                    if(states.highlightIndex === -1 || states.highlightIndex === 0){
                        states.highlightIndex = filterOption.value.length - 1;
                    }else{
                        states.highlightIndex--;
                    }
                }
                break;
            case "ArrowDown":
                // 阻止默认事件，防止页面上下滑动
                e.preventDefault();
                if(filterOption.value?.length > 0){
                    if(states.highlightIndex === -1 || states.highlightIndex === filterOption.value.length - 1){
                        states.highlightIndex = 0;
                    }else{
                        states.highlightIndex ++;
                    }
                }
                break;
            default:
                break;
        }
    }
</script>
