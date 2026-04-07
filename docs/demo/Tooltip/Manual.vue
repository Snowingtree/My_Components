<script setup lang="ts">
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
import type { TooltipInstance } from '@/components/Tooltip/type'

const tooltipRef = ref<TooltipInstance>()
const status = ref('当前状态：已隐藏')

const show = () => tooltipRef.value?.show()
const hide = () => tooltipRef.value?.hidden()

const handleVisibleChange = (value: boolean) => {
  status.value = value ? '当前状态：已显示' : '当前状态：已隐藏'
}
</script>

<template>
  <div class="demo-tooltip-manual">
    <div class="demo-tooltip-manual__actions">
      <Button type="primary" @click="show">显示</Button>
      <Button @click="hide">隐藏</Button>
    </div>
    <Tooltip
      ref="tooltipRef"
      manual
      content="通过实例方法控制 Tooltip 的显示和隐藏"
      @visible-change="handleVisibleChange"
    >
      <Button>手动控制 Tooltip</Button>
    </Tooltip>
    <p class="demo-tooltip-manual__text">{{ status }}</p>
  </div>
</template>

<style scoped>
.demo-tooltip-manual {
  display: grid;
  gap: 12px;
}

.demo-tooltip-manual__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-tooltip-manual__text {
  margin: 0;
  color: #606266;
  font-size: 14px;
}
</style>
