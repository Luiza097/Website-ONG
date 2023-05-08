import axios from 'axios'

export default {
    namespaced: true,
    state: {
        animaisPerdidos: []
    },
    mutations: {
        addAnimalPerdido(state, animalPerdido) {
            state.animaisPerdidos.push(animalPerdido);
        },
        updateAnimalPerdido(state, animalPerdido) {
            const u = state.animaisPerdidos.find((animal) => animal.id == animalPerdido.id);
            if (u) {
                state.animaisPerdidos = state.animaisPerdidos.map((animal) => {
                    if (animal.id == animalPerdido.id) return animalPerdido;
                    else return animal;
                });
            } else {
                state.animaisPerdidos.push(animalPerdido);
            }
        },
        setAnimaisPerdidos(state, listaAnimaisPerdidos) {
            state.animaisPerdidos = listaAnimaisPerdidos;
        },
        // DeleteUser(state, animalPerdido){ 
        // }

    },
    actions: {
        async cadastrarAnimalPerdido({ commit }, animalPerdido) {
            const resultado = await axios.post('http://localhost:3000/animalperdido', animalPerdido);
            commit('addAnimalPerdido', resultado.data)

        },
        async alterarAnimalPerdido({ commit }, animalPerdido) {
            const resultado = await axios.put('http://localhost:3000/animalperdido/' + animalPerdido.id, animalPerdido);
            commit('updateUser', resultado.data);
        },

        async listarAnimaisPerdidos({ commit }) {
            const resultado = await axios.get('http://localhost:3000/animalperdido');
            commit('setAnimaisPerdidos', resultado.data);
        },

    },
}