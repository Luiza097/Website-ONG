<template>
    <div>
        <div class="text-center">
        <span>Menu totalmente completo: </span>
        <router-link to="/lista">Lista</router-link>
        <span class="mx-2">/</span>
        <router-link class="mb-4" to="/listaFormulario">Lista de Formularios</router-link>
        </div>
        <table class="table table-striped mt-3 container">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Nome </th>
          <th>Email</th>
          <th>Animal</th>
          <th>Visualizar</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="form in formularios"
        :key="form.id"
        >
          <td>{{form.id}}</td>
          <td>{{form.nomeInterresado}}</td>
          <td>{{form.email}}</td>
          <td>{{form.idAnimal}}</td>
          <td><router-link :to="{ name: 'Formularios' ,params: { id: form.id } }">Exibir</router-link></td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    created(){
        this.listarForm()
    },
    methods: {
        ...mapActions('Form',['listarForm'])
    },
    computed: {
        ...mapState('Form',{
            formularios: state => state.formularios
        })
    }
    
}
</script>