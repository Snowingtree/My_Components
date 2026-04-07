<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <div class="demo-button-row">
    <Button disabled>Disabled</Button>
    <Button type="primary" disabled>Primary Disabled</Button>
    <Button type="success" loading>Loading</Button>
  </div>

  <div class="demo-button-row">
    <Button size="large" type="primary">Large</Button>
    <Button>Default</Button>
    <Button size="small" type="primary">Small</Button>
  </div>
</template>

<style scoped>
.demo-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.demo-button-row + .demo-button-row {
  margin-top: 12px;
}

.demo-button-row :deep(.wm-button) {
  margin-left: 0 !important;
}
</style>
