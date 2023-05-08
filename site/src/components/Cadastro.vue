<template>
<div class="container">
    <form @submit.prevent="submit">
        <div class="form-group">
        <label for="categoria">Nome</label>
        <input type="text" name="nome" class="form-control" v-model="animais.nome">
        </div>

        <div class="form-group">
        <label for="categoria">Pelagem</label>
        <input type="text" name="pelagem" class="form-control" v-model="animais.pelagem">
        </div>

        <div class="form-group">
              <div class="form-row">
                <legend class="col-form-label pt-0">
                  Sexo
                </legend>
                <div class="form-control">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="gridRadios"
                      id="gridRadios1"
                      value="M"
                      v-model="animais.sexo"
                    />
                    <label class="form-check-label" for="gridRadios1"
                      >Masculino</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="F"
                      v-model="animais.sexo"
                    />
                    <label class="form-check-label" for="gridRadios2"
                      >Feminino</label
                    >
                  </div>
                </div>
              </div>
        </div>

        <div class="form-group">
              <div class="form-row">
                <legend class="col-form-label pt-0">
                  Porte
                </legend>
                <div class="form-control">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="gridRadios1"
                      id="gridRadios3"
                      value="P"
                      v-model="animais.porte"
                    />
                    <label class="form-check-label" for="gridRadios3"
                      >Pequeno</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios1"
                      id="gridRadios4"
                      value="M"
                      v-model="animais.porte"
                    />
                    <label class="form-check-label" for="gridRadios4"
                      >Médio</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios1"
                      id="gridRadios5"
                      value="G"
                      v-model="animais.porte"
                    />
                    <label class="form-check-label" for="gridRadios5"
                      >Grande</label
                    >
                  </div>
                </div>
              </div>
        </div>

        <div class="form-group">
        <label for="categoria">Nascimento</label>
        <input type="date" name="nascimento" class="form-control" v-model="animais.nascimento">
        </div>

        <div class="form-group">
        <label for="categoria">Descrição</label>
        <textarea class="form-control" name="descricao" v-model="animais.descricao"></textarea>
        </div>

        <button class="btn btn-success" type="submit">
        <slot name="button"></slot>
        </button>
    </form>
</div>
</template>

<script>
export default {
  props:{
    id: Number,
    nome: String,
    pelagem: String,
    sexo: String,
    porte: String,
    nascimento: String,
    descricao: String,
    idEspecie: Number,

  },
  data: () => {
    return {
      animais: {},
    }
  },
  created() {
    this.animais = {};
    if (this.id) this.animais.id = this.id
    if (this.nome) this.animais.nome = this.nome
    if (this.pelagem) this.animais.pelagem = this.pelagem
    if (this.sexo) this.animais.sexo = this.sexo
    if (this.porte) this.animais.porte = this.porte
    if (this.nascimento) this.animais.nascimento = this.nascimento
    if (this.descricao) this.animais.descricao = this.descricao
    if (this.idEspecie) this.animais.idEspecie = this.idEspecie
  },
  methods:{
    submit() {
      this.$emit('submit', this.animais);
    }
  },
}
</script>