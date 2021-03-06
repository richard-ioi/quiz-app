import { createRouter, createWebHistory } from 'vue-router'
import QuestionManager from '../components/QuestionManager.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/start-new-quiz-page',
      name: 'quiz',
      component: () => import('../views/NewQuizPage.vue')
    },
    {
      path: '/questions',
      name: 'question',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: QuestionManager
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('../views/ScorePage.vue')
    }

  ]
})

export default router
