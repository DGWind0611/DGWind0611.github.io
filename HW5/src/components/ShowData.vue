<template>
  <div class="showData">
    <button id="showdata" v-on:click="handleClick">顯示資料</button>
  </div>
</template>

<script>
export default {
  name: "showData",
  async handleClick() {
    let url = "http://localhost:3000/api";

    if (this.selectedDate) {
      url += "?日期=" + this.selectedDate;
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const res_data = await response.json();
      this.data = res_data;
      console.log("成功", res_data);
    } catch (error) {
      console.log("錯誤", error);
    }
  }
}
</script>

<style>
.showData {
  display: flex;
  justify-content: center;
  align-items: center;
}

#showdata {
  background-color: #008CBA;
  color: white;
  border-color: #008CBA;
  font-family: "微軟正黑體", "Microsoft JhengHei", sans-serif;
  font-size: 15px;
}
</style>