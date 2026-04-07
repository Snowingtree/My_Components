<script setup lang="ts">
import Icon from '@/components/Icon/Icon.vue'

const icons = ['user', 'house', 'gear', 'heart']
</script>

<template>
  <div class="demo-icon-grid">
    <div v-for="name in icons" :key="name" class="demo-icon-card">
      <Icon :icon="name" size="lg" />
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<style scoped>
.demo-icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}

.demo-icon-card {
  display: grid;
  justify-items: center;
  gap: 8px;
  padding: 16px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}
</style>
