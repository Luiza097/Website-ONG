import axios from 'axios'

export default {
    namespaced: true,
    state: {
        formularios:[]
      },
      getters: {
        get: function(state) {
          return function(id) {
            return state.formularios.find((f) => f.id == id);  
          }
      }
      },
      mutations: {
        addForm(state,formulario) {
          state.formularios.push(formulario);
        },
        setForm(state, listaForms) {
          state.formularios = listaForms;
      },
    
      },
      actions: {
        async cadastrarForm({ commit },formulario) {
          const resultado = await axios.post('http://localhost:3000/animal/'+formulario.idAnimal+'/formulario',formulario);
          commit('addForm',resultado.data);
        },
        async listarForm({ commit }) {
          const resultado = await axios.get('http://localhost:3000/formulario');
          commit('setForm', resultado.data);
        },
      },
}