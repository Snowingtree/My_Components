<script setup lang="ts">
import Alert from '@/components/Alert/Alert.vue'
</script>

<template>
  <div class="demo-alert-list">
    <Alert title="深色成功提示" type="success" effect="dark" icon="check" />
    <Alert title="深色警告提示" type="warning" effect="dark" icon="triangle-exclamation" />
    <Alert title="支持图标和居中布局" type="info" effect="dark" center icon="info" />
  </div>
</template>

<style scoped>
.demo-alert-list {
  display: grid;
  gap: 12px;
}
</style>
