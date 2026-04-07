<script setup lang="ts">
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'

const placements = ['top', 'left', 'right', 'bottom'] as const
</script>

<template>
  <div class="demo-tooltip-grid">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      :content="`placement: ${placement}`"
      :placement="placement"
    >
      <Button>{{ placement }}</Button>
    </Tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
