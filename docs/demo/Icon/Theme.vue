<script setup lang="ts">
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="demo-icon-row">
    <Icon icon="check" type="success" size="2x" />
    <Icon icon="triangle-exclamation" type="warning" size="2x" />
    <Icon icon="xmark" type="danger" size="2x" />
    <Icon icon="spinner" color="#409eff" spin size="2x" />
  </div>
</template>

<style scoped>
.demo-icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
</style>
