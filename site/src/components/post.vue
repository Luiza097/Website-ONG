<template>
        <div class="modal" :id="'sisModal1'+id" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">{{nome}}</h5>
              <button type="button" class="close" data-dismiss="modal">
                <span>x</span>
              </button>
            </div>
            <div class="modal-div animalperdidomodal">
              <div class="row">
                <div class="col-12">
                  <h2 class="text-uppercase text-center procura">Procura-se</h2>
                </div>
                <div class="col-12">
                  <img class="imgmodal rounded" src="assets/imgs/dog1.jpg" />
                </div>
                <div class="col-12 divmodal">
                  <section class="text-center txtmodal">Nome do Proprietario: {{nomeDoProprietario}}</section>
                  <section class="text-center txtmodal">Nome: {{nome}}</section>
                  <section class="text-center txtmodal">Raça: {{raca}}</section>
                  <section class="text-center txtmodal">Idade: {{idade}}</section>
                  <section class="text-center txtmodal">Porte: {{porte}}</section>
                  <section class="text-center txtmodal">
                    Visto pela ultima vez no {{bairro}}, na {{rua}}
                  </section>
                  <section class="text-center txtmodal">
                    Descrição: {{descricao}}
                  </section>
                  <section class="text-center txtmodal">
                    telefone para contato: {{telefone}}
                  </section>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Compartilhe</button>
            </div>
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
.animalperdidomodal{
	border: paleturquoise solid;
}
.imgmodal{
	max-width: 100%;
	border: solid 2px;
}
.procura{
	background-color: royalblue;
	padding-top: 4px;
}
.divmodal{
	margin-top: 10px;
}
</style>