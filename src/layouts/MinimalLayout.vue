<template>
  <div class="minimal-layout">
    <main class="minimal-layout__main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.minimal-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
}

.minimal-layout__main {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 90%;
}
</style>
