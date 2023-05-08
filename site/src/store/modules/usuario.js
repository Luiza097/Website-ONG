import axios from 'axios'

export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        addUser(state, user) {
            state.users.push(user);
        },
        updateProduto(state, user) {
            const u = state.users.find((usuario) => usuario.id == user.id);
            if (u) {
                state.users = state.users.map((usuario) => {
                    if (usuario.id == user.id) return user;
                    else return usuario;
                });
            } else {
                state.users.push(user);
            }
        },
        setUsers(state, listaUsers) {
            state.users = listaUsers;
        },
        // DeleteUser(state, user){ 
        // }

    },
    actions: {
        async cadastrarUser({ commit }, user) {
            const resultadoUser = await axios.post('http://localhost:3000/users', user);
            commit('addUser', resultadoUser.data)

        },
        async alterarUser({ commit }, user) {
            const resultado = await axios.put('http://localhost:3000/users/' + user.id, user);
            commit('updateUser', resultado.data);
        },

        async listarUsers({ commit }) {
            const resultado = await axios.get('http://localhost:3000/users');
            commit('setUsers', resultado.data);
        },

    },
}