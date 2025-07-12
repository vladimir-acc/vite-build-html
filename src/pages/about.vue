<template>
  <div class="about-page">
    <h1>About Us</h1>
    <p>This page provides information about our SSR application built with modern web technologies.</p>
    <div class="tech-stack">
      <h2>Tech Stack</h2>
      <ul>
        <li>Vue 3 with Composition API</li>
        <li>TypeScript for type safety</li>
        <li>Vite for fast development</li>
        <li>vite-plugin-ssr for SSR</li>
        <li>SCSS for styling</li>
      </ul>
    </div>
    <div class="page-links">
      <router-link to="/" class="page-link" @click.prevent="$emit('navigate', 'index')">Go back to Home Page</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

// Настройка head для SSG
useHead({
  title: 'About Us - Vue App'
})

// Настройка title для страницы About (fallback для клиента)
onMounted(() => {
  document.title = 'About Us - Vue App'
})
</script>

<style lang="scss" scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;

  h1 {
    color: $primary-color;
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  p {
    color: $text-color;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.tech-stack {
  background-color: $light-color;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid $primary-color;

  h2 {
    color: $primary-color;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
    color: $text-color;
    border-bottom: 1px solid #e9ecef;
    position: relative;
    padding-left: 1.5rem;

    &:last-child {
      border-bottom: none;
    }

    &:before {
      content: "✓";
      color: $success-color;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
}

.page-links {
  text-align: center;
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