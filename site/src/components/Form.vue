<template>
  <div>
    <div class="alert alert-warning mt-5" role="alert">
      <div class="container">
        <p class="text-center mt-2 mb-1">
          Ateção, o preenchimento deste formulario não significa que a adoção do
          animal já está feita, é apenas para termos mais informação de quem
          está querendo adotado-lo, preencher esse formulario não o obriga a
          adotar o animal!
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center mb-5 my-5">
        <div class="col-sm-12 col-md-10 col-lg-12">
          <form @submit.prevent="submit">
            <div class="form-row">
              <div class="form-group col-sm-12">
                <label for="inputNome">Seu Nome</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nome"
                  name="nomeInteressado"
                  v-model="form.nomeInteressado"
                />
              </div>
              <div class="form-group col-sm-12">
                <label for="inputEmail">Seu Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nome@dominio.com"
                  name="email"
                  v-model="form.email"
                />
              </div>
              
            </div>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Possui algum cão em casa?
                </legend>
                <div class="col-sm-6 form-control">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="gridRadios"
                      id="gridRadios1"
                      value="sim"
                      v-model="form.qtdAnimalCasa"
                    />
                    <label class="form-check-label" for="gridRadios1"
                      >Sim</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="não"
                      v-model="form.qtdAnimalCasa"
                    />
                    <label class="form-check-label" for="gridRadios2"
                      >Não</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Qual seu tipo de residência?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoResidencia"
                      id="gridRadios3"
                      value="casa"
                      v-model="form.tipoResidencia"
                    />
                    <label class="form-check-label" for="gridRadios3"
                      >Casa</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoResidencia"
                      id="gridRadios4"
                      value="apartamento"
                      v-model="form.tipoResidencia"
                    />
                    <label class="form-check-label" for="gridRadios4"
                      >Apartamento</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoResidencia"
                      id="gridRadios5"
                      value="chacara/sitio"
                      v-model="form.tipoResidencia"
                    />
                    <label class="form-check-label" for="gridRadios5"
                      >Chácara/Sítio</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoResidencia"
                      id="gridRadios6"
                      value="outros"
                      v-model="form.tipoResidencia"
                    />
                    <label class="form-check-label" for="gridRadios6"
                      >Outros</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Qual o tipo de piso onde o cão vai ficar a maior parte do
                  tempo?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoPiso"
                      id="gridRadios9"
                      value="ajuleijo"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios9"
                      >Azuleijado</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoPiso"
                      id="gridRadios10"
                      value="carpete"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios10"
                      >Carpete</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoPiso"
                      id="gridRadios11"
                      value="ceramica"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios11"
                      >Cerâmica</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoPiso"
                      id="gridRadios12"
                      value="cimentoQueimado"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios12"
                      >Cimento Queimado</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoPiso"
                      id="gridRadios13"
                      value="cimentoCru"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios13"
                      >Cimento Cru</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tipoPiso"
                      id="gridRadios14"
                      value="terra/gramado"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios14"
                      >Terra/Gramado</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="form.tipoPiso"
                      id="gridRadios15"
                      value="outros"
                      v-model="form.tipoPiso"
                    />
                    <label class="form-check-label" for="gridRadios15"
                      >Outros</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  O Cão vai poder ficar dentro e fora de casa ?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="dentroOuFora"
                      id="gridRadios16"
                      value="Fora"
                      v-model="form.dentroOuFora"
                    />
                    <label class="form-check-label" for="gridRadios16"
                      >Apenas fora</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="dentroOuFora"
                      id="gridRadios17"
                      value="dentroEfora"
                      v-model="form.dentroOuFora"
                    />
                    <label class="form-check-label" for="gridRadios17"
                      >Dentro e fora, tanto faz</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="dentroOuFora"
                      id="gridRadios18"
                      value="Dentro"
                      v-model="form.dentroOuFora"
                    />
                    <label class="form-check-label" for="gridRadios18"
                      >Apenas dentro</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Quanto tempo o filhote ficaria com você?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tempoDisponivel"
                      id="gridRadios19"
                      value="diariamente"
                      v-model="form.tempoDisponivel"
                    />
                    <label class="form-check-label" for="gridRadios19"
                      >O dia inteiro</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tempoDisponivel"
                      id="gridRadios20"
                      value="manha"
                      v-model="form.tempoDisponivel"
                    />
                    <label class="form-check-label" for="gridRadios20"
                      >Na parte da manhã</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tempoDisponivel"
                      id="gridRadios21"
                      value="tarde"
                      v-model="form.tempoDisponivel"
                    />
                    <label class="form-check-label" for="gridRadios21"
                      >Na parte da tarde</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="tempoDisponivel"
                      id="gridRadios22"
                      value="noite"
                      v-model="form.tempoDisponivel"
                    />
                    <label class="form-check-label" for="gridRadios22"
                      >Apenas de noite</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Voce gostaria de um cão para...
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="animalPara"
                      id="gridRadios24"
                      value="companhia"
                      v-model="form.animalPara"
                    />
                    <label class="form-check-label" for="gridRadios24"
                      >Companhia</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="animalPara"
                      id="gridRadios25"
                      value="exposicao"
                      v-model="form.animalPara"
                    />
                    <label class="form-check-label" for="gridRadios25"
                      >Exposição/Criação</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Você pensa em castrar seu cão ?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="castrar"
                      id="gridRadios26"
                      value="sim"
                      v-model="form.castrar"
                    />
                    <label class="form-check-label" for="gridRadios26"
                      >Sim</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="castrar"
                      id="gridRadios27"
                      value="não"
                      v-model="form.castrar"
                    />
                    <label class="form-check-label" for="gridRadios27"
                      >Não</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Alguem na casa tem alergia a cachorro?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="alergia"
                      id="gridRadios28"
                      value="sim"
                      v-model="form.alergia"
                    />
                    <label class="form-check-label" for="gridRadios28"
                      >Sim</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="alergia"
                      id="gridRadios29"
                      value="não"
                      v-model="form.alergia"
                    />
                    <label class="form-check-label" for="gridRadios29"
                      >Não</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="form-row">
                <legend class="col-form-label col-sm-6 pt-0">
                  Irá vacinar e vermifugar o animal?
                </legend>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="vacinaEvermifugar"
                      id="gridRadios30"
                      value="sim"
                      v-model="form.vacinaEvermifugar"
                    />
                    <label class="form-check-label" for="gridRadios30"
                      >Sim</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="vacinaEvermifugar"
                      id="gridRadios31"
                      value="não"
                      v-model="form.vacinaEvermifugar"
                    />
                    <label class="form-check-label" for="gridRadios31"
                      >Não</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="form-group row">
              <div class="col-sm-12">
                <button type="submit" class="btn btn-primary">
                  <slot name="button"></slot>
                </button>
              </div>
            </div> 
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qtdAnimalCasa: String,
    tipoResidencia: String,
    tipoPiso: String,
    dentroOuFora: String,
    tempoDisponivel: String,
    animalPara: String,
    castrar: String,
    alergia: String,
    vacinaEvermifugar: String,
    nomeInteressado: String,
    email: String,
    idAnimal: Number
  },
  data: () => {
    return {
      form:{}
    };
  },
  created() {
    this.form = {};
    if (this.idAnimal) this.form.idAnimal = this.idAnimal;
    if (this.qtdAnimalCasa) this.form.qtdAnimalCasa = this.qtdAnimalCasa;
    if (this.tipoResidencia) this.form.tipoResidencia = this.tipoResidencia;
    if (this.tipoPiso) this.form.tipoPiso = this.tipoPiso;
    if (this.dentroOuFora) this.form.dentroOuFora = this.dentroOuFora;
    if (this.tempoDisponivel) this.form.tempoDisponivel = this.tempoDisponivel;
    if (this.animalPara) this.form.animalPara = this.animalPara;
    if (this.castrar) this.form.castrar = this.castrar;
    if (this.alergia) this.form.alergia = this.alergia;
    if (this.vacinaEvermifugar) this.form.vacinaEvermifugar = this.vacinaEvermifugar;
    if (this.nomeInteressado) this.form.nomeInteressado = this.nomeInteressado;
    if (this.email) this.form.email = this.email;
  },
  methods: {
    submit() {
      this.$emit('submit', this.form);
    }
  }
};

</script>
