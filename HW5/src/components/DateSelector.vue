<template>
  <div class="choseDate">
    <p class="dataInitDay">資料從2010/10/07開始收入</p>
    <form action="/action_page.php">
      <label for="myDate">查詢日期:</label>
      <input type="date" id="myDate" @change="formatDate">
      <input class="inputDate" type="text" id="formattedDate" name="日期" v-model="selectedDate"
             @change="handleDateChange">
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    formatDate(event) {
      const inputDate = event.target.value;
      const dateObj = new Date(inputDate);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      const formattedDate = `${year}/${month}/${day}`;
      this.selectedDate = formattedDate;
    },
    handleDateChange(event) {
      this.$emit('date-change', this.selectedDate);
    }
  }
};
</script>

<style>
.choseDate{
  font-family: "微軟正黑體", "Microsoft JhengHei", sans-serif;
  padding-bottom: 5px;
}
</style>
