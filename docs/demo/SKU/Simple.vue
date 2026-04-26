<script setup lang="ts">
import SKU from '@/components/SKU/SKU.vue'

const specList = [
  { id: 'size', title: '\u5c3a\u7801', list: ['S', 'M', 'L', 'XL'] },
  { id: 'fabric', title: '\u9762\u6599', list: ['\u68c9\u8d28', '\u7f8a\u6bdb', '\u725b\u4ed4'] },
]

const specCombinationList = [
  { id: '1', specs: ['S', '\u68c9\u8d28'] },
  { id: '2', specs: ['M', '\u68c9\u8d28'] },
  { id: '3', specs: ['M', '\u725b\u4ed4'] },
  { id: '4', specs: ['L', '\u7f8a\u6bdb'] },
  { id: '5', specs: ['XL', '\u725b\u4ed4'] },
]
</script>

<template>
  <SKU :specList="specList" :specCombinationList="specCombinationList" />
</template>
