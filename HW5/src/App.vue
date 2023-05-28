<script setup>
import DateSelection from "@/components/icons/DateSelection.vue";
import TableContainer from "@/components/TableContainer.vue";
import AddData from "@/components/AddData.vue";
import ShowData from "@/components/ShowData.vue";
</script>

<template>
  <div id="app">
    <div class="title">
      <h1 class="title">家禽交易行情(白肉雞/雞蛋)</h1>
    </div>
    <AddData/>
    <DateSelection @change="handleDateChange" v-model="selectedDate"/>
    <ShowData/>
    <TableContainer :data="data"/>
  </div>
</template>
<style>
body {
  background-color: rgba(234, 232, 111, 0.31);
}
</style>

