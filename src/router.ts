// Роуты для vite-ssg
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/index.vue'),
    meta: {
      title: 'Home Page - Vue App',
      description: 'Welcome to the home page of our Vue application.',
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/about.vue'),
    meta: {
      title: 'About Us - Vue App',
      description: 'Learn about our application built with modern web technologies.',
      layout: 'default'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./pages/contact.vue'),
    meta: {
      title: 'Contact - Vue App',
      description: 'Contact page description.',
      layout: 'default'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/login.vue'),
    meta: {
      title: 'Login - Vue App',
      description: 'Login page with minimal layout.',
      layout: 'minimal'
    }
  }
]
