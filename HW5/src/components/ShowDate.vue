<!-- ShowData.vue -->
<template>
  <div class="showData">
    <button id="showdata" v-on:click="handleClick">顯示資料</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // 在这里处理点击事件的逻辑
      // ...
    }
  }
};
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