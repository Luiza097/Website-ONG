<template>
  <div>
    <div class="text-center">
      <span>Menu totalmente completo: </span>
      <router-link to="/lista">Lista</router-link>
      <span class="mx-2">/</span>
      <router-link class="mb-4" to="/listaFormulario"
        >Lista de Formularios</router-link
      >
    </div>
    <div>
      <Form
      v-if="hasForm"
      :qtdAnimalCasa="formularios.qtdAnimalCasa"
      :tipoResidencia="formularios.tipoResidencia" 
      :tipoPiso="formularios.tipoPiso"
      :dentroOuFora="formularios.dentroOuFora"
      :tempoDisponivel="formularios.tempoDisponivel"
      :animalPara="formularios.animalPara"
      :castrar="formularios.castrar"
      :alergia="formularios.alergia"
      :vacinaEvermifugar="formularios.vacinaEvermifugar"
      :nomeInteressado="formularios.nomeInteressado" 
      :email="formularios.email" 
      :idAnimal="formularios.idAnimal" 
      />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Form,
  },
  computed: {
    ...mapGetters("Form", ["get"]),
    formularios() {
      return this.get(this.$route.params.id);
    },
    hasForm() {
      return this.formularios != null;
    },
  },
  methods: {
        ...mapActions('Form',['listarForm'])
  },
  async created() {
    this.listarForm(this.$route.params.id);
  },
};
</script>