<script setup lang="ts">
import SKU from '@/components/SKU/SKU.vue'

const specList = [
  { id: 'color', title: '\u989c\u8272', list: ['\u66dc\u77f3\u9ed1', '\u4e91\u96fe\u767d', '\u6df1\u6d77\u84dd'] },
  { id: 'bundle', title: '\u5957\u9910', list: ['\u6807\u51c6\u7248', '\u5145\u7535\u5957\u88c5', '\u793c\u76d2\u5957\u88c5'] },
  { id: 'storage', title: '\u5b58\u50a8', list: ['128G', '256G', '512G'] },
]

const specCombinationList = [
  { id: '1', specs: ['\u66dc\u77f3\u9ed1', '\u6807\u51c6\u7248', '128G'] },
  { id: '2', specs: ['\u66dc\u77f3\u9ed1', '\u6807\u51c6\u7248', '256G'] },
  { id: '3', specs: ['\u66dc\u77f3\u9ed1', '\u5145\u7535\u5957\u88c5', '256G'] },
  { id: '4', specs: ['\u4e91\u96fe\u767d', '\u6807\u51c6\u7248', '256G'] },
  { id: '5', specs: ['\u4e91\u96fe\u767d', '\u793c\u76d2\u5957\u88c5', '512G'] },
  { id: '6', specs: ['\u6df1\u6d77\u84dd', '\u5145\u7535\u5957\u88c5', '128G'] },
  { id: '7', specs: ['\u6df1\u6d77\u84dd', '\u793c\u76d2\u5957\u88c5', '256G'] },
]
</script>

<template>
  <SKU :specList="specList" :specCombinationList="specCombinationList" />
</template>
