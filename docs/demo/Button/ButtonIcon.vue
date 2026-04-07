<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-button-row">
    <Button type="primary" icon="plus">Create</Button>
    <Button type="success" icon="check">Confirm</Button>
    <Button type="warning" icon="download">Download</Button>
    <Button type="info" circle>
      <Icon icon="gear" />
    </Button>
  </div>
</template>

<style scoped>
.demo-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-button-row :deep(.wm-button) {
  margin-left: 0 !important;
}
</style>
