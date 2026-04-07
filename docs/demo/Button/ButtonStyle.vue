<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-button-row">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="info">Info</Button>
  </div>

  <div class="demo-button-row">
    <Button plain>Plain</Button>
    <Button type="primary" plain>Plain Primary</Button>
    <Button type="success" round>Round</Button>
    <Button type="danger" circle>
      <Icon icon="heart" />
    </Button>
  </div>
</template>

<style scoped>
.demo-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-button-row + .demo-button-row {
  margin-top: 12px;
}

.demo-button-row :deep(.wm-button) {
  margin-left: 0 !important;
}
</style>
