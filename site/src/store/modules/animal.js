import axios from 'axios'




export default {
    namespaced: true,
    state: {
        animais: [],
    },
    getters: {
        listaGatos: (state) => {
            return state.animais.filter((a) => a.idEspecie == 2)
        },
        listaCachorro: (state) => {
            return state.animais.filter((a) => a.idEspecie == 1)
        },
        get: function(state) {
            return function(id) {
              return state.animais.find((a) => a.id == id);  
            }
        }
    },
    mutations: {
        addAnimal(state, animal) {
            state.animais.push(animal);  
        },
        updateAnimal(state, animal) {
            const u = state.animais.find((a) => a.id == animal.id);
            if (u) {
                state.animais = state.animais.map((a) => {
                    if (a.id == animal.id) return animal;
                    else return a;
                });
            } else {
                state.animais.push(animal);
            }
        },
        setAnimais(state, listaAnimals) {
            state.animais = listaAnimals;
        },
        deleteAnimal(state, animal){
            const d = state.animais.find((a) => a.id == animal.id)

            return d
        }
    },
    actions: {
        async cadastrarAnimal({ commit }, animal) {
            const resultadoAnimal = await axios.post('http://localhost:3000/especie/'+animal.idEspecie+'/animal', animal);
            commit('addAnimal', resultadoAnimal.data)
        },
        async alterarAnimal({ commit }, animal) {
            const resultado = await axios.put('http://localhost:3000/animal/'+animal.id, animal);
            commit('updateAnimal', resultado.data);
        },

        async listarAnimais({ commit }) {
            const resultado = await axios.get('http://localhost:3000/animal');
            commit('setAnimais', resultado.data);
        },

        async getAnimal({ commit },id) {
            const resultado = await axios.get('http://localhost:3000/animal/'+id);
            commit('updateAnimal',resultado.data)
            return resultado.data;
        },
        
        async deletarAnimal({commit}, id) {
            const resultado = await axios.delete('http://localhost:3000/animal/'+id);
            commit('deleteAnimal', resultado.data);
        },

        



    },
}