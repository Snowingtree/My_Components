<script setup>
import { ref,h } from 'vue'
import Select from '@/components/Select/Select.vue'

const test = ref("3")
const options2 = [
  { label: '1', value: 1 },
  { label: '12', value: '2' },
  { label: '123', value: '3' },
  { label: '1234', value: 4 },
  { label: '12345', value: '5', disabled: true }
]
</script>
<template>
  <Select v-model="test" placeholder="基础选择器，请选择" :options="options2" filterable></Select>
</template>

<style>

</style>