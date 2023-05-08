<template>
  <div class="about">
    <div id="Caes">

      <div class="text-center">
        <a href="#Caes" class="btn color my-3 mx-3">Caes</a>
        <a href="#Gatos" class="btn color my-3">Gatos</a>
      </div>

      <h2 class="text-center py-3">Conheça nossos cãezinhos para adoção</h2> 
      
      <div class="row mx-3">
        <div
          class="col-md-4 col-sm-12"
          v-for="animal in listaCachorro"
          :key="animal.id"
        >
          <div class="card mb-5">
            <Animais
              :nome="animal.nome"
              :sexo="animal.sexo"
              :nascimento="animal.nascimento"
              :porte="animal.porte"
            />
            <div class="text-center pb-3">
              <router-link
                :to="{ name: 'Informacoes', params: {id: animal.id}}"
                class="btn btn-info m-auto mb-4 mt-2"
                >Mais informações</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="Gatos">
      <h2 class="text-center py-3">Conheça nossos gatinhos para adoção</h2>
      <div class="row mx-3">
        <div
          class="col-md-4 col-sm-12"
          v-for="animal in listaGatos"
          :key="animal.id"
        >
          <div class="card mb-5">
            <Animais
              :nome="animal.nome"
              :sexo="animal.sexo"
              :nascimento="animal.nascimento"
              :porte="animal.porte"
            />
            <div class="text-center pb-3">
              <router-link
                :to="{ name: 'Informacoes', params: {id: animal.id}}"
                class="btn btn-info m-auto mb-4 mt-2"
                >Mais informações</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Animais from "../components/Animais";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Animais,
  },
  created() {
    this.listarAnimais();
  },
  methods: {
    ...mapActions("Animais", ["listarAnimais"]),
  },
  computed: {
    ...mapGetters("Animais", ["listaGatos", "listaCachorro"]),
  },
};
</script>

<style scoped>
#Caes {
	background-color: #FFDAB9;
}	

.color{
  background-color: #ddad84;
}

#Gatos{
 background-color: #87CEFA;
 padding-top: 40px;
}
</style>