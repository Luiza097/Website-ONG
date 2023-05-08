<template>
  <div>
    <img class="card-img-top" src="assets/img/cat2.jpg" />
    <div class="card-div text-center">
      <h3 class="card-title"> {{nome}}</h3>
      <section class="card-text">
        <h4>{{idComputada}}</h4>
        <h4> Sexo: {{ sexoComputado }}</h4>
        <h4> Porte: {{ porteComputado }}</h4>
        <h4> Idade: {{nascimentoComputado}}</h4>
        <h4>{{pelagemComputada}}</h4>
        <h4>{{descricaoComputada}}</h4>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    nome: String,
    pelagem: String,
    sexo: String,
    porte: String,
    nascimento: String,
    descricao: String
  },
  computed: {
    porteComputado(){
      let p = this.porte
      if(p == "P"){
        p = "Pequeno"
      }
      if(p == "M"){
        p = "Médio"
      }
      if(p == "G"){
        p = "Grande"
      }
      return p
    },
    sexoComputado(){
      let s = this.sexo
      if(s == "F"){
        s = "Fémea"
      }
      if(s == "M"){
        s = "Macho"
      }
      return s
    },
    pelagemComputada(){
      let p = this.pelagem
      if(p != null){
        p = "Pelagem: "+this.pelagem
      }
      return p
    },
    descricaoComputada(){
      let d = this.descricao
      if(d != null){
        d = "Descrição: "+this.descricao
      }
      return d
    },
    idComputada(){
      let i = this.id
      if(i != null){
        i = "Id: "+this.id
      }
      return i
    },
    nascimentoComputado(){
      const ano = new Date()
      const anoAnimal = new Date(this.nascimento)

      const idade = ano.getFullYear() - anoAnimal.getFullYear()

      if(idade == 1){
        return idade + " ano"
      }else {
        return idade + " anos"
      }
    },
  }
};
</script>

<style scoped>
h3 {
  color: #f47f20;
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>