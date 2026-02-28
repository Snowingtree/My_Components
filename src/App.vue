<template>
    <div>
        <Button type = "success" size = "large">plain</Button>
        <Button type = "warning" size = "small">warning</Button>
        <Button type = "danger">danger</Button>
        <Button round type= "info">round</Button>
        <Button circle>circle</Button>
        <Button disabled>disabled</Button>
    </div>
    <div>
    <Button type = "success" plain>plain</Button>
    <Button type = "warning" plain>warning</Button>
    <Button type = "danger" plain>danger</Button>
    <Button round type= "info" plain>round</Button>
    <Button circle plain>circle</Button>
    <Button disabled>disabled</Button>
    </div>
</template>

<script setup lang="ts">
    import Button from './components/Button/Button.vue';
    import {ref,onMounted} from "vue"
    import type { ButtonInstance } from './components/Button/types';

    // 为什么这里要给类型呢？
    // 如果给类型，想获取DOM节点很复杂，这里返回的是一个proxy代理
    // 如果给了类型，就能通过.ref直接获取DOM节点
    let _ref = ref<ButtonInstance | null>(null);
    
    onMounted(()=>{
        console.log(_ref.value?.ref)
    })
</script>

<style scoped>
</style> 
