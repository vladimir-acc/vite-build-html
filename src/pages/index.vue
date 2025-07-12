<script lang="ts" setup>
// This is the main entry point for the home page of your Vue SSR application.

// Определяем события
defineEmits<{
  navigate: [page: string]
}>()
</script>

<template>
  <div class="home-page">
    <h1>Welcome to My Vue SSR App</h1>
    <p>This is the home page of your Vue application built with Vite, Vue 3, TypeScript and SSR.</p>
    <div class="page-links">
      <a href="/about" class="page-link" @click.prevent="$emit('navigate', 'about')">Go to About Page</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  text-align: center;

  h1 {
    color: $primary-color;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    color: $text-color;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.page-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.page-link {
  @include button-style($primary-color);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
}
</style>