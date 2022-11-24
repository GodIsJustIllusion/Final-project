<template>
  <div class="container">
    <header class="header">
      <img src="../public/img/logo.png" alt="mainlogo">
      <div class="nav">
        <router-link to="/" class="nav-item">Home page</router-link>
        <router-link to="/digital-calc" class="nav-item">Цифровой</router-link>
        <router-link to="/offset-calc" class="nav-item">Офсетный</router-link>
        <router-link to="/interior-calc" class="nav-item">Интерьерный</router-link>
      </div>
    </header>

    <div>
      <h1>Калькулятор для типографии</h1>
      <router-view></router-view>
    </div>

    <footer class="footer">
      <h3>Когда-нибудь здесь будет подвал приложения, но это уже совсем другая история...</h3>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style scoped>
  .container {
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
  }

  .header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-top: 30px;
  }

  .nav-item {
    text-decoration: none;
    font-size: 1.5rem;
  }

  .nav-item:not(:last-child) {
    padding-right: 20px;
  }

  .router-link-active {
    font-weight: 600;
    color: darkcyan;
  }
</style>