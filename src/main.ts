import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

// Импортируем стили
// import './style.css'
import '@/assets/styles/main.scss'

// Импортируем лейауты
import DefaultLayout from './layouts/DefaultLayout.vue'
import MinimalLayout from './layouts/MinimalLayout.vue'

// Создаем приложение с vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    // Регистрируем лейауты глобально
    app.component('DefaultLayout', DefaultLayout)
    app.component('MinimalLayout', MinimalLayout)
    
    // Настройка динамических title для клиента
    if (isClient) {
      router.beforeEach((to, _from, next) => {
        // Обновляем title страницы на клиенте
        if (to.meta.title) {
          document.title = to.meta.title as string
        }
        next()
      })
    }
  }
)
