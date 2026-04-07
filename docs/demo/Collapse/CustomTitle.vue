<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'

const activeNames = ref<Array<string | number>>(['custom'])
</script>

<template>
  <Collapse v-model="activeNames">
    <CollapseItem name="custom">
      <template #title>
        <span class="demo-collapse-title">
          <Icon icon="bolt" type="warning" />
          <span>自定义标题</span>
        </span>
      </template>
      通过 title 插槽可以组合图标、数字标签或其他自定义内容。
    </CollapseItem>
    <CollapseItem name="disabled" title="禁用项" disabled>
      这个内容不会被展开，因为当前项处于禁用状态。
    </CollapseItem>
  </Collapse>
</template>

<style scoped>
.demo-collapse-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
</style>
