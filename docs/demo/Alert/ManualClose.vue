<script setup lang="ts">
import { ref } from 'vue'
import Alert from '@/components/Alert/Alert.vue'
import Button from '@/components/Button/Button.vue'
import type { Instance as AlertInstance } from '@/components/Alert/type'

const alertRef = ref<AlertInstance>()
const message = ref('点击右侧关闭图标，或者通过下方按钮触发实例方法关闭。')

const closeAlert = () => {
  alertRef.value?.close()
  message.value = '提示已关闭，刷新页面后可以重新查看这个示例。'
}
</script>

<template>
  <div class="demo-alert-actions">
    <Alert ref="alertRef" type="primary" closable icon="bell">
      <strong>自定义内容</strong>
      <span> 默认插槽会直接替代 title，用来展示更灵活的提示内容。</span>
    </Alert>
    <p class="demo-alert-text">{{ message }}</p>
    <Button type="primary" @click="closeAlert">通过实例方法关闭</Button>
  </div>
</template>

<style scoped>
.demo-alert-actions {
  display: grid;
  gap: 12px;
}

.demo-alert-text {
  margin: 0;
  color: #606266;
  font-size: 14px;
}
</style>
