<template>
  <div class="demo-button-row">
    <Button>hello</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button loading>loading</Button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WMButton-Basic',
}
</script>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
</script>

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
