<script setup lang="ts">
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <Tooltip trigger="click" placement="right">
    <Button type="primary">点击触发</Button>
    <template #content>
      <div class="demo-tooltip-card">
        <strong>自定义内容</strong>
        <span>Tooltip 支持 content 插槽，可以展示更复杂的内容。</span>
      </div>
    </template>
  </Tooltip>
</template>

<style scoped>
.demo-tooltip-card {
  display: grid;
  gap: 6px;
  min-width: 180px;
}
</style>
