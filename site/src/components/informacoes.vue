<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7 col-md-7 col-sm-12">
      <img src="../../public/assets/img/cat2.jpg" class="img-fluid border rounded shadow" />
    </div>
    <div class="col-lg-5 col-md-5 col-sm-12 mt-4">
      <ul style="list-style-type: none">
        <li>
          <p class="text-uppercase">Nome: {{ nome }}</p>
          <p class="text-uppercase">sexo: {{ sexoComputado }}</p>
          <p class="text-uppercase">porte: {{ porteComputado }}</p>
          <p class="text-uppercase">Idade: {{ nascimentoComputado }}</p>
          <p class="text-uppercase">Pelagem: {{ pelagem }}</p>
          <p class="text-uppercase">Personalidade: {{ descricao }}</p>
        </li>
      </ul>
    </div>
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
    descricao: String,
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