<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

const activeNames = ref<Array<string | number>>(['guide'])
</script>

<template>
  <div class="demo-collapse">
    <p class="demo-collapse__value">手风琴模式当前展开：{{ activeNames[0] || '无' }}</p>
    <Collapse v-model="activeNames" accordion>
      <CollapseItem name="guide" title="使用指南">
        在手风琴模式下，同一时间只会展开一个面板。
      </CollapseItem>
      <CollapseItem name="api" title="API">
        这里仍然使用数组作为 v-model 的值，只是数组长度通常为 0 或 1。
      </CollapseItem>
      <CollapseItem name="faq" title="常见问题">
        如果点击当前已展开项，会再次折叠。
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
