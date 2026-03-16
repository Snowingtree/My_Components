<script setup>
import { ref,h } from 'vue'
import Select from '@/components/Select/Select.vue'

const test = ref("3")
const options2 = [
  { label: '你好', value: 1 },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: '4', value: 4 },
  { label: 'check', value: '5', disabled: true }
]
const customReder = (option)=>{
    return h("div",{className:"xyz"},[h("b",option.label),h('span',option.value)])
}
</script>
<template>
  <Select v-model="test" placeholder="基础选择器，请选择" :options="options2" :renderLabel="customReder"></Select>
</template>

<style>
    .wm-select__menu-item,.xyz{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
</style>