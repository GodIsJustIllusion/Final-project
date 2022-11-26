<template>
  <h2>Цифровой калькулятор</h2>

  <section class="inputBlock">
    <label class="titleInput" for="numberOfProduct">Тираж</label>
    <input type="text" name="numberOfProduct" id="numberOfProduct" pattern="^[ 0-9]+$" required maxlength="6">
  </section>

  <section class="inputBlock">
    <label class="titleInput" for="commet">Комментарий</label>
    <textarea name="comment" id="commet" placeholder="Комментарий и путь к файлу" cols="40" rows="5"></textarea>
  </section>

  <section class="inputBlock">
    <label class="titleInput" for="chromaticity">Цветность</label>
    <select id="chromaticity">
      <option selected>Выбери цветность</option>
      <option v-for="(ch, id) in paperBase.data.chromaticity" v-bind:key="id">{{ ch.name }}</option>
    </select>
  </section>

  <section class="inputBlock">
    <label class="titleInput" for="paper">Выбери бумагу</label>
    <div>
      <input list="paper" v-model="paperList" id="paperList">
      <datalist id="paper">
        <option id="paperItem" v-for="(item, index) in paperBase.data.paper" v-bind:key="index">{{ item.name }} {{ item.index }}
        </option>
      </datalist>
      <input name="paper" pattern="^[ 0-9]+$" v-model="amountPaper" maxlength="6">
    </div>
  </section>

  <p v-if="createElem" class="attension">Бумаги не хватает. Не забудь заказать</p>
<!--  <p>{{ paperList }}</p>-->

  <section class="inputBlock">
    <label class="titleInput" for="material">Выбери материал</label>
    <div>
      <div class="materialList">
        <input list="material">
        <datalist id="material">
          <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
        </datalist>
        <input name="materials" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="materialList">
        <input list="material">
        <datalist id="material">
          <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
        </datalist>
        <input name="materials" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="materialList">
        <input list="material">
        <datalist id="material">
          <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
        </datalist>
        <input name="materials" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="materialList">
        <input list="material">
        <datalist id="material">
          <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
        </datalist>
        <input name="materials" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="materialList">
        <input list="material">
        <datalist id="material">
          <option v-for="(m, id) in paperBase.data.materials" v-bind:key="id">{{ m.name }}</option>
        </datalist>
        <input name="materials" pattern="^[ 0-9]+$" maxlength="6">
      </div>
    </div>
  </section>

  <section class="inputBlock">
    <label class="titleInput" for="jobs">Постпечатные работы:</label>
    <div>
      <div class="jobsList">
        <input list="jobs">
        <datalist id="jobs">
          <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
        </datalist>
        <input name="jobs" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="jobsList">
        <input list="jobs">
        <datalist id="jobs">
          <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
        </datalist>
        <input name="jobs" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="jobsList">
        <input list="jobs">
        <datalist id="jobs">
          <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
        </datalist>
        <input name="jobs" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="jobsList">
        <input list="jobs">
        <datalist id="jobs">
          <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
        </datalist>
        <input name="jobs" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="jobsList">
        <input list="jobs">
        <datalist id="jobs">
          <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
        </datalist>
        <input name="jobs" pattern="^[ 0-9]+$" maxlength="6">
      </div>
      <div class="jobsList">
        <input list="jobs">
        <datalist id="jobs">
          <option v-for="(j, id) in paperBase.data.jobs" v-bind:key="id">{{ j.name }}</option>
        </datalist>
        <input name="jobs" pattern="^[ 0-9]+$" maxlength="6">
      </div>
    </div>

  </section>

  <button type="button" class="btn" @click="some()">Посчитать</button>
  <button type="button" class="btn">Передать в график</button>

  <h3>Общая стоимость: {{ totalCount }} руб. Цена за штуку: {{ countPerOne }} руб.</h3>

</template>

<script>
import { paperBase } from "@/Paper-fetch"

let inp = document.getElementById('paperList')
console.log(inp)

export default {
  name: "Digital-calc",
  data () {
    return {
      paperBase,
      paperList:'',
      amountPaper:'',
      totalCount: 9615,
      countPerOne: 96.20,
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
    createElem(inp) {
      let currentPaper = paperBase.data.paper.filter(function(item) {
        if (item.name === inp.value) {
          return item
        }
      });
      console.log(inp.value)
      return +currentPaper.join('') < this.amountPaper;
    }
  }
}
</script>

<style scoped>
  .titleInput {
    margin-right: 20px;
  }

  .inputBlock {
    display: flex;
    justify-content: space-between;
    max-width: 25vw;
  }

  .attension {
    color: red;
    font-size: 0.8rem;
  }

  .inputBlock:not(:last-child) {
    margin-bottom: 30px;
  }

  .jobsList {
    display: flex;
  }

  .jobsList:not(:last-child), .materialList:not(:last-child) {
    margin-bottom: 20px;
  }
</style>