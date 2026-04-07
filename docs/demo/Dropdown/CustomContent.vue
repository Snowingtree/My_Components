<script setup lang="ts">
import { h, ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import type { menuOptions } from '@/components/Dropdown/type'

const selected = ref('支持字符串和 VNode 作为菜单项内容')

const menu: menuOptions[] = [
  {
    key: 'profile',
    label: h('span', { style: 'display:inline-flex;align-items:center;gap:8px;' }, [
      h(Icon, { icon: 'user', type: 'primary' }),
      '个人中心',
    ]),
  },
  {
    key: 'setting',
    label: h('span', { style: 'display:inline-flex;align-items:center;gap:8px;' }, [
      h(Icon, { icon: 'gear', type: 'info' }),
      '系统设置',
    ]),
  },
  {
    key: 'disabled',
    label: '不可用操作',
    disabled: true,
    divided: true,
  },
]

const handleSelect = (item: menuOptions) => {
  selected.value = `最近选择：${String(item.key)}`
}
</script>

<template>
  <div class="demo-dropdown">
    <Dropdown :menu="menu" placement="right-start" @select="handleSelect">
      <Button>自定义菜单内容</Button>
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
