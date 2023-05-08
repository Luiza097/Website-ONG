import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/usuario';
import Form from './modules/formulario';
import Animais from './modules/animal';
import Especie from './modules/especie'
import animalPerdido from './modules/animaisPerdidos'
import Fotos from './modules/fotos'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Form,
    Animais,
    Especie,
    animalPerdido,
    Fotos
  }
})
