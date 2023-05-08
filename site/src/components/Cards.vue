<template>
    <div>
      <div>
        <img class="card-img-top" src="assets/imgs/dog1.jpg">
              <div class="card-body text-center">
                <h3 class="card-title">{{nome}}</h3>
                <section class="card-text">
                  <h4>{{sexo}}</h4>
                  <h4>{{raca}}</h4>
                  <h4>{{idade}}</h4>
                  <h4>{{porte}}</h4>
                </section>
                <a class="btn btn-info" data-toggle="modal" :data-target="'#sisModal1'+id">Mais informações</a>
              </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    id: Number,
    nome: String,
    bairro: String,
    rua: String,
    idade: String,
    sexo: String,
    porte: String,
    raca: String,
    descricao: String,
    telefone: String,
    nomeDoProprietario: String
  },
}
</script>

<style scoped>
h3 {
  color: #f47f20;
  margin-bottom: 15px;
}
</style>