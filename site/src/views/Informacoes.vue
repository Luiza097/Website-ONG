<template>
  <div>
    <div class="container my-3">
      <h2 class="text-center">Informações</h2>
      <div>
        <Informacoes
          v-if="hasAnimal"
          :id="animalId"
          :nome="animais.nome"
          :sexo="animais.sexo"
          :pelagem="animais.pelagem"
          :nascimento="animais.nascimento"
          :porte="animais.porte"
          :descricao="animais.descricao"
        />
      </div>
      <div class="row d-flex justify-content-end my-3">
        <div class="col-md-1 d-flex justify-content-center">
          <router-link
            :to="{name: 'CadastrarFormulario', params: {id: animalId}}"
            class="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
            >Adoção</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Informacoes from "../components/informacoes";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Informacoes,
  },
  computed: {
    ...mapGetters('Animais', ['get']),
    animais() {
      if(this.$route.params.id){
        return this.get(this.$route.params.id);
      }else{
        return null
      }  
    },
    hasAnimal() {
      return this.animais != null;
    },
    animalId(){
      return parseInt(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions('Animais', ['listarAnimais']),
    
  },
  async created() {
    await this.listarAnimais()
  }
};
</script>
