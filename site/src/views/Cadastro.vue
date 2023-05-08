<template>
    <div>
        <div class="text-center">
        <span>Menu totalmente completo: </span>
        <router-link to="/lista">Lista</router-link>
        <span class="mx-2">/</span>
        <router-link class="mb-4" to="/listaFormulario">Lista de Formularios</router-link>
        </div>
        <h1 class="text-center my-2">Cadastrar Animal</h1>
        <Cadastro 
        :idEspecie="especieId"
        @submit="cadastrar">
            <template v-slot:button>
                Cadastrar
            </template>
        </Cadastro>
    </div>
</template>

<script>
import Cadastro from '../components/Cadastro'
import { mapActions } from 'vuex'
export default {
    components: {
        Cadastro,
    },
    methods:{
        ...mapActions('Animais',['cadastrarAnimal']),
        async cadastrar(objeto){
            await this.cadastrarAnimal(objeto)
            this.$router.push('/lista');

        },
    },
    computed: {
        especieId(){
            return parseInt(this.$route.params.idEspecie)
        }
    }
}
</script>