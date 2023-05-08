import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Adocao from '../views/Adocao.vue'
import Formulario from '../views/Formulario.vue'
import Informacoes from '../views/Informacoes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/adocao',
    name: 'Adocao',
    component: Adocao
  },
  {
    path: '/cadastrarFormulario/:id',
    name: 'CadastrarFormulario',
    component: Formulario
  },
  {
    path: '/informacoes/:id',
    name: 'Informacoes',
    component: Informacoes
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/especie/:idEspecie/animal',
    name: 'Cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro.vue')
  },
  {
    path: '/lista',
    name: 'Lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaDeAnimais.vue')
  },
  {
    path: '/animal/:id',
    name: 'Alterar',
    component: () => import(/* webpackChunkName: "about" */ '../views/AlterarAnimal.vue')
  },
  {
    path: '/listaFormulario',
    name: 'ListaForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaDeFormularios.vue'),
  },
  {
    path: '/formulario/:id',
    name: 'Formularios',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormView.vue'),
  },
  {
    path: '/imagens',
    name: 'Imagens',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdicionarImagens.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
