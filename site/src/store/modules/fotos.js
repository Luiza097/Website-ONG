import axios from 'axios'

export default {
    namespaced: true,
    state: {
        fotos:[]
      },
      mutations: {
        addFoto(state,foto) {
          state.fotos.push(foto);
        },
    
      },
      actions: {
        async cadastrarFoto({ commit },foto) {
          const resultado = await axios.post('http://localhost:3000/animal/'+foto.idAnimal+'/fotoanimal',foto);
          commit('addFoto',resultado.data);
        },
    
      },
}