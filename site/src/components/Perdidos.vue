<template>
  <div>
    <div class="text-center mb-3">
      <a class="btn btn-info" data-toggle="modal" data-target="#sisModal"
        >Adicionar</a
      >
    </div>

    <form
      class="modal"
      id="sisModal"
      tabindex="-1"
      role="dialog"
      @submit.prevent="submit"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Adicionar Animal Perdido</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>x</span>
            </button>
          </div>
          <div class="modal-div container">
            <div class="row text">
              <div class="col-12 divmodal">
                <div class="form-group">
                  <label for="categoria">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    class="form-control"
                    placeholder="ex: Doguinho"
                    v-model="animaisperdidos.nome"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Sexo</label>
                  <input
                    type="text"
                    name="sexo"
                    class="form-control"
                    placeholder="ex: Macho"
                    v-model="animaisperdidos.sexo"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Pelagem</label>
                  <input
                    type="text"
                    name="pelagem"
                    class="form-control"
                    placeholder="ex: Curta"
                    v-model="animaisperdidos.pelagem"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Porte</label>
                  <input
                    type="text"
                    name="porte"
                    class="form-control"
                    placeholder="ex: Médio"
                    v-model="animaisperdidos.porte"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Idade</label>
                  <input
                    type="text"
                    name="idade"
                    class="form-control"
                    placeholder="ex: Filhote"
                    v-model="animaisperdidos.idade"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Raça</label>
                  <input
                    type="text"
                    name="raca"
                    class="form-control"
                    placeholder="ex: SRD ou Vira-Lata"
                    v-model="animaisperdidos.raca"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Nome do Proprietario</label>
                  <input
                    type="text"
                    name="nomeDoProprietario"
                    class="form-control"
                    placeholder="ex: Jorge Ferreira"
                    v-model="animaisperdidos.nomeDoProprietario"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Ultimo Bairro em que foi Visto</label>
                  <input
                    type="text"
                    name="bairro"
                    class="form-control"
                    placeholder="ex: JK"
                    v-model="animaisperdidos.bairro"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Ultima rua em que foi Visto</label>
                  <input
                    type="text"
                    name="rua"
                    class="form-control"
                    placeholder="ex: Oscar Flamengo"
                    v-model="animaisperdidos.rua"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Telefone do Proprietario</label>
                  <input
                    type="number"
                    name="telefone"
                    class="form-control"
                    placeholder="ex: 40028922"
                    v-model="animaisperdidos.telefone"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Email do Proprietario</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="ex: Jorge.ferreira@gmail.com"
                    v-model="animaisperdidos.email"
                  />
                </div>
                <div class="form-group">
                  <label for="categoria">Descrição do Animal</label>
                  <input
                    type="text"
                    name="descricao"
                    class="form-control"
                    placeholder="ex: Um dog muito fofo :3"
                    v-model="animaisperdidos.descricao"
                  />
                </div>

              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    nome: String,
    bairro: String,
    rua: String,
    descricao: String,
    telefone: Number,
    email: String,
    nomeDoProprietario: String,
    idade: String,
    raca: String
  },
  data: () => {
    return {
      animaisperdidos: {},
    };
  },
  created() {
    this.animaisperdidos = {};
    if (this.nome) this.animaisperdidos.nome = this.nome;
    if (this.idade) this.animaisperdidos.idade = this.idade;
    if (this.raca) this.animaisperdidos.raca = this.raca;
    if (this.bairro) this.animaisperdidos.bairro = this.bairro;
    if (this.rua) this.animaisperdidos.rua = this.rua;
    if (this.descricao) this.animaisperdidos.descricao = this.descricao;
    if (this.telefone) this.animais.telefone = this.telefone;
    if (this.email) this.animais.email = this.email;
    if (this.nomeDoProprietario)
      this.animais.nomeDoProprietario = this.nomeDoProprietario;
  },
  methods: {
    submit() {
      this.$emit("submit", this.animaisperdidos);
    },
  },
};
</script>

<style scoped>
.divmodal{
	margin-top: 10px;
}
</style>