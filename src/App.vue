<template>
    <!-- Button 组件展示 -->
    <!-- <div>
    <h1>no plain</h1>
    <div>
        <Button type = "success">plain</Button>
        <Button type = "warning">warning</Button>
        <Button type = "danger">danger</Button>
        <Button round type= "info">round</Button>
        <Button circle>circle</Button>
        <Button disabled>disabled</Button>
    </div>
    <h1>plain</h1>
    <div>
    <Button type = "success" plain>plain</Button>
    <Button type = "warning" plain>warning</Button>
    <Button type = "danger" plain>danger</Button>
    <Button round type= "info" plain>round</Button>
    <Button circle plain>circle</Button>
    <Button disabled>disabled</Button>
    </div>
    <h1>size</h1>
    <Button type = "success" size = "large">plain</Button>
    <Button type = "success" >plain</Button>
    <Button type = "success" size = "small">plain</Button>
    </div> -->
    
    <!-- Collapse 组件展示 -->
    <div>
        <Collapse v-model = "modelValue">
            <CollapseItem name="a">
                <template v-slot:title>
                    <h1>nice title</h1>
                </template>
                <h1>headline title</h1>
                <div>this is content a aaa</div>
            </CollapseItem>

            <CollapseItem name="b" title="nice title b item b">
                <div>this is content b bbb</div>
            </CollapseItem>
            
            <CollapseItem name="c" title="nice title c item c" disabled>
                <div>this is content c ccc</div>
            </CollapseItem>
        </Collapse>
    </div>
</template>

<script setup lang="ts">
    import Button from './components/Button/Button.vue';
    import Collapse from './components/Collapse/Collapse.vue';
    import CollapseItem from './components/Collapse/CollapseItem.vue';
    import type {NameType} from "./components/Collapse/types"
    
    import {ref,onMounted} from "vue"
    import type { ButtonInstance } from './components/Button/types';

    // 为什么这里要给类型呢？
    // 如果给类型，想获取DOM节点很复杂，这里返回的是一个proxy代理
    // 如果给了类型，就能通过.ref直接获取DOM节点
    let _ref = ref<ButtonInstance | null>(null);
    
    onMounted(()=>{
        // console.log(_ref.value?.ref)
    })
    const modelValue = ref<NameType[]>([]);
    
    // setTimeout(()=>{
    //     modelValue.value = ["a","b","c"];
    // },3000);


</script>

<style scoped>
</style> 
