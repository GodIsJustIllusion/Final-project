<template>
  <h2>График заказов</h2>

  <p>Бумага: {{ paperBase.data.paper }}</p>
  <p>Материал: {{ paperBase.data.materials }}</p>
  <p>Рулонный материал:{{ paperBase.data.scroll_material }}</p>
  <p>Работы: {{ paperBase.data.jobs }}</p>
</template>

<script>
import { paperBase } from "@/Paper-fetch"

export default {
  name: "Schedule-page",
  data () {
    return {
      paperBase
    }
  }
}
</script>



<style scoped>

</style>