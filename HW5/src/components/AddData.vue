<template>
  <div class="addData">
    <form id="chickenData" @submit="handleFormSubmit">
      <label for="date">日期</label>
      <input type="text" id="date" name="date" v-model="formData.date">
      <label for="lunar">農曆</label>
      <input type="text" id="lunar" name="lunar" v-model="formData.lunar">
      <label for="chicken1">白肉雞(2.0Kg以上)</label>
      <input type="text" id="chicken1" name="chicken1" v-model="formData.chicken1">
      <label for="chicken2">白肉雞(1.75-1.95Kg)</label>
      <input type="text" id="chicken2" name="chicken2" v-model="formData.chicken2">
      <label for="chicken3">白肉雞(門市價高屏)</label>
      <input type="text" id="chicken3" name="chicken3" v-model="formData.chicken3">
      <label for="egg">雞蛋(產地)</label>
      <input type="text" id="egg" name="egg" v-model="formData.egg">
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        date: '',
        lunar: '',
        chicken1: '',
        chicken2: '',
        chicken3: '',
        egg: ''
      }
    };
  },
  methods: {
    async handleFormSubmit(event) {
      event.preventDefault(); // Prevent form submission and page reload

      const url = "http://localhost:3000/api"; // API URL for inserting data

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
        const data = await response.json();
        console.log("成功", data);
      } catch (error) {
        console.log("錯誤", error);
      }
    }
  }
};
</script>
