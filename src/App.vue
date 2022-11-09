<template>
  <h1>Калькулятор для типографии</h1>
  <router-link to="/">Home page</router-link>
  <router-link to="/digital-calc">Цифровой</router-link>
  <router-link to="/offset-calc">Офсетный</router-link>
  <router-link to="/interior-calc">Интерьерный</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>