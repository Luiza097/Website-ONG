<template>
  <div>
    <form class="border rounded">
      <div class="logo">
          <img src="assets/img/logo.png" />
      </div>
      <div class="form-group">
        <label for="Email">Endereço de email</label>
        <input
          type="email"
          class="form-control"
          id="Email"
          aria-describedby="emailHelp"
          placeholder="Seu email"
          v-model="user.email"
          :email="users"
        />
      </div>
      <div class="form-group">
        <label for="Password">Senha</label>
        <input
          type="password"
          class="form-control"
          id="Password"
          placeholder="Senha"
          v-model="user.senha"
        />
      </div>
      <button type="button" class="btn btn-primary link" @click="validar()">Entrar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    email: String,
    senha: String
  },
  data:() => {
    return {
      user: {}
    }
  },
  computed: {
    ...mapState('User', {
      users: state => state.users
    }),
  },
  methods: {
    ...mapActions('User', ['listarUsers']),
    validar(){
      const email = document.querySelector('#Email').value
      const senha = document.querySelector('#Password').value
      if(email == this.user.email){
        if(senha == this.user.senha){
          this.$router.push('/lista')
        }else{
          return alert('senha invalida')
        }
      }else{
        return alert('email invalido')
      }
    }
  },
  created() {
    this.listarUsers()
    this.user = {}
    if (this.email) this.user.email = this.email;
    if (this.senha) this.user.senha = this.senha;
  }
}
</script>

<style scoped>
form {
  margin: auto;
  width: 300px;
  margin-top: 100px;
  border: solid;
  border: 10px;
  background-color: gray;
  padding: 20px;
}
.link{
  margin: auto;
  width: 100%;
  height: 40px;
}
.logo{
    text-align: center;
    margin: 10px;
}
</style>
