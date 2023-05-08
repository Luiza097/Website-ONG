<template>
  <div>
      <Form 
      @submit="cadastrar"
      :idAnimal="animalId"
      >
        <template v-slot:button>
          Enviar
        </template>
      </Form>
  </div>
</template>

<script>
import Form from '../components/Form'
import { mapActions } from 'vuex'
export default {
  components: {
    Form
  },
  methods: {
    ...mapActions('Form',['cadastrarForm']),
    async cadastrar(objeto) {
      await this.cadastrarForm(objeto);
      console.log("animal cadastrado com sucesso")
      this.$router.push('/');
    },
  },
  computed: {
      animalId(){
      return parseInt(this.$route.params.id)
    }
  }
  
}
</script>