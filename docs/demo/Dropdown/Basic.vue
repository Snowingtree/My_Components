<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import type { menuOptions } from '@/components/Dropdown/type'

const selected = ref('还没有选择任何操作')

const menu: menuOptions[] = [
  { label: '查看详情', key: 'view' },
  { label: '复制链接', key: 'copy' },
  { label: '删除', key: 'delete', divided: true },
]

const handleSelect = (item: menuOptions) => {
  selected.value = `你选择了：${String(item.label)}`
}
</script>

<template>
  <div class="demo-dropdown">
    <Dropdown :menu="menu" @select="handleSelect">
      <Button type="primary">更多操作</Button>
    </Dropdown>
    <p class="demo-dropdown__text">{{ selected }}</p>
  </div>
</template>

<style scoped>
.demo-dropdown {
  display: grid;
  gap: 12px;
}

.demo-dropdown__text {
  margin: 0;
  color: #606266;
  font-size: 14px;
}
</style>
