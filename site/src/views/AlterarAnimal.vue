<template>
    <div>
        <div class="text-center">
        <span>Menu totalmente completo: </span>
        <router-link to="/lista">Lista</router-link>
        <span class="mx-2">/</span>
        <router-link class="mb-4" to="/listaFormulario">Lista de Formularios</router-link>
        </div>
        <h1 class="text-center my-2">Alterar Animal</h1>
        <Cadastro
            v-if="hasAnimal"
            :id="animalId"
            :nome="animais.nome"
            :pelagem="animais.pelagem"
            :sexo="animais.sexo"
            :porte="animais.porte"
            :nascimento="animais.nascimento"
            :descricao="animais.descricao"
            @submit="alterar"
            >
            <template v-slot:button>
                Alterar
            </template>
        </Cadastro>
    </div>
</template>

<script>
import Cadastro from '../components/Cadastro'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        Cadastro
    },
    data: () => {
        return {
            animal:{}
        }
    },
    methods: {
    ...mapActions('Animais',['getAnimal','alterarAnimal']),
    async alterar(animal) {
      await this.alterarAnimal(animal);
      this.$router.push('/lista');
    }
  },
  computed: {
    ...mapGetters('Animais',['get']),
    animais() {
      return this.get(this.$route.params.id);
    },
    hasAnimal() {
      return this.animais != null;
    },
    animalId(){
      return parseInt(this.$route.params.id)
    }
  },
  async created() {
    this.getAnimal(this.$route.params.id);
  }
  
}
</script>