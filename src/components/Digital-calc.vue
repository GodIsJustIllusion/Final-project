<template>
  <h2>Цифровой калькулятор</h2>

  <section>
    <label for="numberOfProduct">Тираж</label>
    <input type="text" name="" id="numberOfProduct" pattern="^[ 0-9]+$" required>
  </section>

  <section>
    <label for="chromaticity">Цветность</label>
    <select id="chromaticity">
      <option selected>Выбери цветность</option>
      <option v-for="(ch, id) in paperBase.data.chromaticity" v-bind:key="id">{{ ch.name }}</option>
    </select>
  </section>

  <section>
    <label for="paper">Выбери бумагу</label>
    <select id="paper">
      <option selected>Выбери бумагу</option>
      <option v-for="(p, id) in paperBase.data.paper" v-bind:key="id">{{ p.name }}</option>
    </select>
<!--    <p v-if="p.balance < paper.value">Бумаги не хватает. Не забудь заказать</p>-->
    <input name="paper" pattern="^[ 0-9]+$">
  </section>

  <section>
    <label for="material">Выбери материал</label>
    <select id="material">
      <option selected>Выбери материал</option>
      <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
    </select>
    <input name="materials" pattern="^[ 0-9]+$">
  </section>

  <p>Бумага: {{ paperBase.data.paper }}</p>
  <p>Материал: {{ paperBase.data.materials }}</p>
  <p>Рулонный материал:{{ paperBase.data.scroll_material }}</p>
  <p>Работы: {{ paperBase.data.jobs }}</p>

</template>

<script>
import { paperBase } from "@/Paper-fetch"

export default {
  name: "Digital-calc",
  data () {
    return {
      paperBase
    }
  },
  created() {
    paperBase.getListPaper()
  }
}
</script>

<style scoped>

</style>