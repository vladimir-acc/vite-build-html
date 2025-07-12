<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

// Настройка head для SSG
useHead({
  title: 'Login - Vue App'
})

// Настройка title для страницы Login (fallback для клиента)
onMounted(() => {
  document.title = 'Login - Vue App'
})
</script>

<template>
  <div class="login-page">
    <h1>Login</h1>
    <p>This page uses a minimal layout.</p>
    <form class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
    <div class="back-link">
      <router-link to="/">← Back to Home</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  text-align: center;

  h1 {
    color: $primary-color;
    margin-bottom: 1rem;
  }

  p {
    color: $text-color;
    margin-bottom: 2rem;
  }
}

.login-form {
  text-align: left;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: $text-color;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: $primary-color;
    }
  }
}

.login-btn {
  @include button-style($primary-color);
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

.back-link {
  a {
    color: $primary-color;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
