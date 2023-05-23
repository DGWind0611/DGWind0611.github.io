<script setup>
import AddData from "@/components/AddData.vue";
import DateSelection from "@/components/icons/DateSelection.vue";
import TableContainer from "@/components/TableContainer.vue";
</script>
<template>
  <div id="app">
    <div className="title">
      <h1 className="title">家禽交易行情(白肉雞/雞蛋)</h1>
    </div>
    <AddData/>
    <DateSelection @change="handleDateChange" v-model="selectedDate"/>

    <ShowData @click="handleClick"/>

    <TableContainer :data="data"/>
  </div>
</template>

<style>
body {
  background-color: rgba(234, 232, 111, 0.31);
}

.title {
  font-size: 50px;
  font-weight: bold;
  color: lightblue;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

