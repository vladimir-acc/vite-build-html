<script setup lang="ts">
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';

</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout__main{
  padding: 1rem;
  min-height: 80vh;}
</style>
