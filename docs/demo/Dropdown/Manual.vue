<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import type { DropdownInstance, menuOptions } from '@/components/Dropdown/type'

const dropdownRef = ref<DropdownInstance>()
const status = ref('菜单当前处于关闭状态')

const menu: menuOptions[] = [
  { label: '手动展开项 1', key: 'manual-1' },
  { label: '手动展开项 2', key: 'manual-2' },
]

const show = () => dropdownRef.value?.show()
const hide = () => dropdownRef.value?.hidden()

const handleVisibleChange = (value: boolean) => {
  status.value = value ? '菜单当前处于展开状态' : '菜单当前处于关闭状态'
}
</script>

<template>
  <div class="demo-dropdown-manual">
    <div class="demo-dropdown-manual__actions">
      <Button type="primary" @click="show">展开菜单</Button>
      <Button @click="hide">收起菜单</Button>
    </div>
    <Dropdown ref="dropdownRef" manual :menu="menu" @visible-change="handleVisibleChange">
      <Button>手动触发 Dropdown</Button>
    </Dropdown>
    <p class="demo-dropdown-manual__text">{{ status }}</p>
  </div>
</template>

<style scoped>
.demo-dropdown-manual {
  display: grid;
  gap: 12px;
}

.demo-dropdown-manual__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-dropdown-manual__text {
  margin: 0;
  color: #606266;
  font-size: 14px;
}
</style>
