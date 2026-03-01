<template>
    <div>
        <!-- 父组件标签中的内容展示 -->
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'WMCollapse'
}
</script>

<script setup lang="ts">
    import {provide, ref, watch} from "vue";
    import type {NameType,CollapseProps,CollapesEmits} from "./types";
    import {collapsecontextkey} from "./types"
    
    // 接受父组件的参数和事件
    const props = defineProps<CollapseProps>();
    const emits = defineEmits<CollapesEmits>();
    // 用于存储需要展开的对象
    const activeName = ref<NameType[]>(props.modelValue);
    // 监听props.modelValue，防止在外部发生异步变化
    watch(()=>props.modelValue,(newValue)=>{
        // 对于外部传过来的数据，必须用函数式返回属性
        activeName.value = newValue
    })

    // 传给子组件，用于获取子组件的name判断是否展开
    // 用来实现当前的Collapse接下来应该是折叠还是展开
    const handleItemClick = (item:NameType)=>{
        if(props.accordion === true){
            activeName.value = [activeName.value[0] === item ? "" : item]
        }else{
            const index = activeName.value.indexOf(item);
            // console.log(index)

            if(index !== -1){
                // 找到了，展开变为折叠
                // console.log("splice")
                activeName.value.splice(index,1);
            }else{
                // 没找到，折叠变为展开
                // console.log("push")
                activeName.value.push(item);
            }
        }
        
        emits("update:modelValue",activeName.value);
        emits("change",activeName.value);
    }

    // 给后代组件传递
    provide(collapsecontextkey,{
        activeName:activeName,
        handleItemClick:handleItemClick,
    });

    // 实现手风琴特效，即每次只能打开一个
    if(props.accordion === true && props.modelValue.length > 1){
        console.log("初始值赋值错误，一次只能打开一个")
    }
</script>

<style>

</style>