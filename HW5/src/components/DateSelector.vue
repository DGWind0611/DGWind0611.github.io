<template>
  <div class="choseDate">
    <p class="dataInitDay">資料從2010/10/07開始收入</p>
    <form action="/action_page.php">
      <label for="myDate">查詢日期:</label>
      <input type="date" id="myDate" @change="formatDate">
      <input class="inputDate" type="text" id="formattedDate" name="日期" v-model="selectedDate" @change="handleDateChange">
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    formatDate(event) {
      // 处理日期格式化的逻辑
      // ...
    },
    handleDateChange(event) {
      // 处理日期变化的逻辑
      // ...
    }
  }
};
</script>

<style>
/* 组件样式 */
/* ... */
</style>
