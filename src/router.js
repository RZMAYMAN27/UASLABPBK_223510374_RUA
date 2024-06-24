import { createRouter, createWebHistory } from 'vue-router';
import TaskPage from './components/TaskPage.vue'; 
import HomePage from './components/HomePage.vue'; 

const routes = [
  { path: '/', component: HomePage },
  { path: '/task/:id', component: TaskPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
