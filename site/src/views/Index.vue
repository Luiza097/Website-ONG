<template>
  <div>
    <div
      id="carouselSite"
      class="carousel slide aling-items-center"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-target="#carouselSite" data-slide-to="0" class="active"></li>
        <li data-target="#carouselSite" data-slide-to="1"></li>
        <li data-target="#carouselSite" data-slide-to="2"></li>
        <li data-target="#carouselSite" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a to="#"
            ><img src="assets/imgs/dog2.jpg" class="img-fluid d-block"
          /></a>
          <div class="carousel-caption d-none d-md-block">
            <h1>Adote Um Animal</h1>
            <section>Cuide de um desses Bichinhos</section>
          </div>
        </div>
        <div class="carousel-item">
          <a href="#"
            ><img src="assets/imgs/rottweile.jpg" class="img-fluid d-block"
          /></a>
          <div class="carousel-caption d-none d-md-block">
            <h1>Adote Um Animal</h1>
            <section>Cuide de um desses Bichinhos</section>
          </div>
        </div>
        <div class="carousel-item">
          <a href="#"
            ><img src="assets/imgs/dog1.jpg" class="img-fluid d-block"
          /></a>
          <div class="carousel-caption d-none d-md-block">
            <h1>Adote Um Animal</h1>
            <section>Cuide de um desses Bichinhos</section>
          </div>
        </div>
        <div class="carousel-item">
          <a href="#"
            ><img src="assets/imgs/friends.jpg" class="img-fluid d-block"
          /></a>
          <div class="carousel-caption d-none d-md-block">
            <h1>Adote Um Animal</h1>
            <section>Cuide de um desses Bichinhos</section>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselSite"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselSite"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Avançar</span>
      </a>
    </div>

    <div class="animalperdido container-fluid">
      <h2 class="container py-5 text-center">Animais Perdidos</h2>

      <Perdidos @submit="cadastrar"></Perdidos>

      <div class="row mb-5 mx-3">
        <div
          class="col-md-4 col-sm-12"
          v-for="perdido in animaisPerdidos"
          :key="perdido.id"
        >
          <div class="card mb-5">
            <Cards
              :id="perdido.id"
              :nome="perdido.nome"
              :raca="perdido.raca"
              :sexo="perdido.sexo"
              :idade="perdido.idade"
              :porte="perdido.porte"
              :bairro="perdido.bairro"
              :rua="perdido.rua"
              :descricao="perdido.descricao"
              :telefone="perdido.telefone"
             />
          </div>
          <div>
                <Post
                  :id="perdido.id"
                  :nomeDoProprietario="perdido.nomeDoProprietario"
                  :nome="perdido.nome"
                  :raca="perdido.raca"
                  :sexo="perdido.sexo"
                  :idade="perdido.idade"
                  :porte="perdido.porte"
                  :bairro="perdido.bairro"
                  :rua="perdido.rua"
                  :descricao="perdido.descricao"
                  :telefone="perdido.telefone"
                />

          </div>
        </div>
      </div>
    </div>
    <div class="row col-12">
      <div class="col-md-8 col-sm-12 text-center my-4">
        <h1 class="txt">Quem somos nós</h1>
        <section class="text-justify txt">
          A ONG Amigos de Chiquinho, apesar das dificuldades financeiras, vem ao
          longo desses 4 anos de funcionamento, proporcionando uma vida digna a
          centenas de animais. Os poucos voluntários, são incansáveis, e tentam
          driblar os problemas com muita persistência e amor à causa. O nosso
          desejo é que essa corrente do bem, em prol dos animais, cresça e se
          fortifique, para que um dia, não vejamos mais animais sofrendo nas
          ruas das cidades.
        </section>

        <section class="text-justify txt">
          Para continuarmos com esse trabalho tão importante para esses
          anjinhos, não conseguimos sozinhas. Por isso, a ajuda de cada um de
          vocês, que acreditam que os animais não podem continuar entregues a
          própria sorte, sofrendo e sem amparo, é fundamental.
        </section>

        <section class="text-justify text-right txt">
          Juntos somos muito mais fortes!!!
        </section>
      </div>
      <div class="col-md-4 col-sm-12 d-flex aling-itens-center">
        <img src="assets/img/1.png" class="img-fluid img" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "../components/Cards";
import Perdidos from "../components/Perdidos";
import Post from "../components/post";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Cards,
    Perdidos,
    Post,
  },
  created() {
    this.listarAnimaisPerdidos();
  },
  methods: {
    ...mapActions("animalPerdido", [
      "cadastrarAnimalPerdido",
      "listarAnimaisPerdidos",
    ]),
    async cadastrar(objeto) {
      await this.cadastrarAnimalPerdido(objeto);
      alert("Animal Perdido cadastrado com sucesso!");
    },
  },
  computed: {
    ...mapState("animalPerdido", {
      animaisPerdidos: (state) => state.animaisPerdidos,
    }),
  },
};
</script>

<style scoped>
.img {
  margin: auto;
}
.txt {
  margin-left: 0px;
}
.animalperdido {
  background-color: #f4c894;
}
</style>
