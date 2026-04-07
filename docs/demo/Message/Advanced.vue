<script setup lang="ts">
import { h } from 'vue'
import Button from '@/components/Button/Button.vue'
import { closeAllInstance, createMessage } from '@/index'

const openPersistent = () => {
  createMessage({
    type: 'warning',
    message: '这条消息不会自动关闭，请手动关闭它。',
    duration: 0,
    showClose: true,
  })
}

const openVNode = () => {
  createMessage({
    type: 'info',
    showClose: true,
    message: h('span', { style: 'display:inline-flex;align-items:center;gap:6px;' }, [
      h('strong', null, 'VNode'),
      '内容也可以直接传给 message。',
    ]),
  })
}

const closeAll = () => {
  closeAllInstance()
}
</script>

<template>
  <div class="demo-message-actions">
    <Button type="warning" @click="openPersistent">常驻消息</Button>
    <Button type="primary" @click="openVNode">VNode 内容</Button>
    <Button type="danger" @click="closeAll">关闭全部</Button>
  </div>
</template>

<style scoped>
.demo-message-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
