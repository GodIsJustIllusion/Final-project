<template>
  <h2>Цифровой калькулятор</h2>

  <section>
    <label for="numberOfProduct">Тираж</label>
    <input type="text" name="numberOfProduct" id="numberOfProduct" pattern="^[ 0-9]+$" required>
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
    <input list="paper">
    <datalist id="paper">
      <option id="paperItem" v-for="(item, index) in paperBase.data.paper" v-bind:key="index">{{ item.name }} {{ item.index }}
        <input name="paper" pattern="^[ 0-9]+$" v-model="amountPaper">
      </option>
    </datalist>
    <input name="paper" pattern="^[ 0-9]+$" v-model="amountPaper">
    <p v-if="createElem">Бумаги не хватает. Не забудь заказать</p>
  </section>

  <section>
    <label for="material">Выбери материал</label>
    <input list="material">
    <datalist id="material">
      <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
    </datalist>
    <input name="materials" pattern="^[ 0-9]+$">
  </section>

  <section>
    <label for="jobs">Постпечатные работы:</label>
    <br>
    <input list="jobs">
    <datalist id="jobs">
      <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
    </datalist>
    <input name="jobs" pattern="^[ 0-9]+$">
    <br>
    <input list="jobs">
    <datalist id="jobs">
      <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
    </datalist>
    <input name="jobs" pattern="^[ 0-9]+$">
    <br>
    <input list="jobs">
    <datalist id="jobs">
      <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
    </datalist>
    <input name="jobs" pattern="^[ 0-9]+$">
    <br>
    <input list="jobs">
    <datalist id="jobs">
      <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
    </datalist>
    <input name="jobs" pattern="^[ 0-9]+$">
  </section>

  <button type="button" class="btn" @click="some()">Посчитать</button>
  <button type="button" class="btn">Передать в график</button>

  <h3>Общая стоимость: {{ totalCount }} руб. Цена за штуку: {{ countPerOne }} руб.</h3>

  <p>Бумага: {{ paperBase.data.paper }}</p>
  <p>Материал: {{ paperBase.data.materials }}</p>
  <p>Рулонный материал:{{ paperBase.data.scroll_material }}</p>
  <p>Работы: {{ paperBase.data.jobs }}</p>

</template>

<script>
import { paperBase } from "@/Paper-fetch"

// const code = document.getElementById(paperItem);

export default {
  name: "Digital-calc",
  data () {
    return {
      paperBase,
      amountPaper:'',
      totalCount: 10,
      countPerOne: 0,
      countedData: {}
    }
  },
  created() {
    paperBase.getListPaper()
  },
  methods: {
    some() {
      console.log(this.totalCount += 1)
    }
  },

  computed: {
    createElem() {
      return this.paperBase.data.paper[2].balance < this.amountPaper;
    }
  }
}
</script>

<style scoped>

</style>