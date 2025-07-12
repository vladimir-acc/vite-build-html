<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Получаем роут с проверкой на SSR
let route: any = null
try {
  route = useRoute()
} catch (e) {
  // В SSR режиме useRoute может быть недоступен
  route = { meta: { layout: 'default' } }
}

// Определяем текущий лейаут на основе мета-данных роута
const currentLayout = computed(() => {
  return route?.meta?.layout || 'default'
})
</script>

<template>
  <component :is="`${currentLayout}-layout`">
    <router-view />
  </component>
</template>

<style scoped>
/* App styles */
</style>
