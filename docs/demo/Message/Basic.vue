<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/index'

const openInfo = () => {
  createMessage({ message: '这是一条普通消息' })
}

const openSuccess = () => {
  createMessage({ type: 'success', message: '保存成功' })
}

const openWarning = () => {
  createMessage({ type: 'warning', message: '请先确认必填项' })
}

const openDanger = () => {
  createMessage({ type: 'danger', message: '删除后不可恢复' })
}
</script>

<template>
  <div class="demo-message-actions">
    <Button @click="openInfo">普通消息</Button>
    <Button type="primary" @click="openSuccess">成功消息</Button>
    <Button type="warning" @click="openWarning">警告消息</Button>
    <Button type="danger" @click="openDanger">危险消息</Button>
  </div>
</template>

<style scoped>
.demo-message-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
