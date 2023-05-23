<template>
  <div className="choseDate">
    <p className="dataInitDay">資料從2010/10/07開始收入</p>
    <form action="/action_page.php">
      <label htmlFor="myDate">查詢日期:</label>
      <input type="date" id="myDate" @change="handleDateChange">
      <input className="inputDate" type="text" id="formattedDate" name="日期" v-model="selectedDate">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: null,
    };
  },
  methods: {
    formatDate(event) {
      const inputDate = event.target.value;
      const dateObj = new Date(inputDate);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      const formattedDate = `${year}/${month}/${day}`;
      this.selectedDate = formattedDate;
    }
  }
};
</script>
