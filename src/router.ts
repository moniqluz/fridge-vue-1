import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from './views/HomeView.vue'
import FridgeView from './views/FridgeView.vue'
import HistoryView from './views/HistoryView.vue'
import RankingView from './views/RankingView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/fridge', name: 'fridge', component: FridgeView },
  { path: '/history', name: 'history', component: HistoryView },
  { path: '/ranking', name: 'ranking', component: RankingView },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
