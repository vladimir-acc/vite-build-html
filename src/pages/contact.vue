<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

// Настройка head для SSG
useHead({
  title: 'Contact - Vue App'
})

// Настройка title для страницы Contact (fallback для клиента)
onMounted(() => {
  document.title = 'Contact - Vue App'
})
</script>

<template>
  <div class="contact-page">
    <h1>Contact Page</h1>
    <p>This is the contact page.</p>
  </div>
  <div class="page-links">
    <router-link to="/" class="page-link" @click.prevent="$emit('navigate', 'index')">Go back to Home Page</router-link>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  text-align: center;
  padding: 2rem;

  h1 {
    color: $primary-color;
    margin-bottom: 1rem;
  }

  p {
    color: $text-color;
    margin-bottom: 2rem;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

</style>