import { createRouter, createWebHistory } from 'vue-router';
import KalendareView from '@/views/KalendareView.vue';
import AuthView from '@/views/AuthView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: KalendareView },
    { path: '/auth', component: AuthView }
  ]
});

export default router;
