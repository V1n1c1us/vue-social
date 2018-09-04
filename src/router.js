import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CcLogin from './components/login/CcLogin'
import CcCadastro from './components/cadastro/CcCadastro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    name: 'home',
	component: Home
    },
    {
  path: '/login',
  name: 'login',
  component: CcLogin
  },
  {
  path: '/cadastro',
  name: 'cadastro',
  component: CcCadastro
  }
]
})
