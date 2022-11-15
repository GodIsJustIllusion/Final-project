<template>
  <h2>Цифровой калькулятор</h2>


  <section>
    <input type="number" name="" id="numberOfProduct" required>
    <label for="numberOfProduct">Тираж</label>
  </section>

  <section>
    <input list="chromaticity">
    <datalist id="chromaticity">
      <option>4+0</option>
      <option>4+4</option>
      <option>1+0</option>
      <option>1+1</option>
      <option>4+1</option>
    </datalist>
    <label for="chromaticity">Цветность</label>
  </section>

  <section>
    <input list="paper">
    <datalist id="paper">
      <option v-for="pap in paperBase" v-bind:key="pap">Аперитивы</option>
      <option>Горячие</option>
      <option>Десертные</option>
      <option>Диджестивы</option>
      <option>Молочные</option>
      <option>Слоистые</option>
    </datalist>
    <label for="paper">Кол-во листов</label>
  </section>

  <section>
    <input list="paper">
    <datalist id="paper">
      <option>Аперитивы</option>
      <option>Горячие</option>
      <option>Десертные</option>
      <option>Диджестивы</option>
      <option>Молочные</option>
      <option>Слоистые</option>
    </datalist>
    <label for="paper">Кол-во листов</label>
  </section>

  <section>
    <input list="material">
    <datalist id="material">
      <option>Ламинация</option>
      <option>Пружина</option>
      <option>Винт</option>
      <option>Ламинация</option>
      <option>Пружина</option>
      <option>Винт</option>
    </datalist>
    <label for="material">Кол-во материала</label>
  </section>

  <p>{{ paperBase }}</p>

</template>

<script>
import { paperBase } from "@/Paper-fetch"

export default {
  name: "Digital-calc",
  data () {
    return {
      paperBase
    }
  }
}
</script>

<style scoped>

</style>