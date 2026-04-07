<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

const activeNames = ref<Array<string | number>>(['1'])
</script>

<template>
  <div class="demo-collapse">
    <p class="demo-collapse__value">当前展开：{{ activeNames.join(', ') || '无' }}</p>
    <Collapse v-model="activeNames">
      <CollapseItem name="1" title="一致性">
        统一的交互和视觉规则可以帮助用户更快理解页面结构。
      </CollapseItem>
      <CollapseItem name="2" title="反馈">
        明确的状态反馈能让组件在复杂场景中也保持可预期。
      </CollapseItem>
      <CollapseItem name="3" title="效率">
        折叠面板适合承载补充信息，避免一开始就把内容全部铺开。
      </CollapseItem>
    </Collapse>
  </div>
</template>

<style scoped>
.demo-collapse {
  display: grid;
  gap: 12px;
}

.demo-collapse__value {
  margin: 0;
  color: #606266;
  font-size: 14px;
}
</style>
