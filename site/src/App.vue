<template>
  <div id="app">
    <div class="fonti">
      <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div class="container">
          <img src="../public/assets/img/logo.png" class="img-fluid" />

          <div>
            <ul class="navbar-nav">
              <li class="nav-item d-none d-sm-block">
                <router-link to="/" class="nav-link">INÍCIO</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/adocao" class="nav-link">ADOÇÕES</router-link>
              </li>

              <li class="nav-item dropdown d-none d-sm-block">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >DOAÇÕES</a
                >
                <div class="dropdown-menu">
                  <a class="dropdown-item disabled" href="#">Alimentos</a>
                  <a class="dropdown-item" href="https://pag.ae/7WZik6yem">Ajuda Financeira</a>
                  <a class="dropdown-item disabled" href="#">Produtos de Limpeza</a>
                </div>
              </li>
              <li>
                <router-link to="/login" class="nav-link">LOGIN</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.fonti {
  font-family: "Comfortaa", cursive;
}
</style>
