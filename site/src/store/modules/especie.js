import axios from 'axios'

export default {
    namespaced: true,
    state: {
        especies:[]
      },
      mutations: {
        addEspecie(state,especie) {
          state.especies.push(especie);
        },
    
      },
      actions: {
        async cadastrarEspecie({ commit },especie) {
          const resultado = await axios.post('http://localhost:3000/especie',especie);
          commit('addEspecie',resultado.data);
        },
    
      },
}