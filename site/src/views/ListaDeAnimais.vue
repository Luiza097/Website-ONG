<template>
<div>
    <div class="text-center">
      <div class="text-center">
        <span>Menu totalmente completo: </span>
        <router-link to="/lista">Lista</router-link>
        <span class="mx-2">/</span>
        <router-link class="mb-4" to="/listaFormulario">Lista de Formularios</router-link>
        </div>
        <router-link :to="{ name:  'Cadastro', params:{ idEspecie: 1}}" class="btn btn-success my-3 mx-2">Cadastrar Cachorro</router-link>
        <router-link :to="{ name: 'Cadastro', params:{ idEspecie: 2}}" class="btn btn-success my-3">Cadastrar Gato</router-link>
    </div>
    <div>
        <div class="row mx-3">
          <div class="col-md-4 col-sm-12" v-for=" animal in animais"
          :key="animal.id">
            <div class="card mb-5">
              <Animais
              :nome="animal.nome"
              :id="animal.id"
              :sexo="animal.sexo"
              :pelagem="animal.pelagem"
              :nascimento="animal.nascimento"
              :porte="animal.porte"
              :descricao="animal.descricao"/>
              <div class="text-center pb-3">
                <router-link
                :to="{ name: 'Alterar', params: {id: animal.id}}"
                class="btn btn-info m-auto mb-4 mt-2"
                >Mais informações</router-link
              >
              <div>
                <i class="far fa-trash-alt btn btn-danger my-2" v-on:click="deletarAnimal(animal.id)">Deletar Animal</i>
              </div>
              <div>
                <router-link class="btn btn-success" to="/imagens">Adicionar Foto</router-link>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import Animais from '../components/Animais'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Animais

  },
  created() {
    this.listarAnimais();
  },
  methods: {
    ...mapActions('Animais',['listarAnimais','deletarAnimal']),
  },
  computed: {
    ...mapState('Animais',{
        animais: state => state.animais,
    }),
  },
};
</script>

<style scoped>

</style>