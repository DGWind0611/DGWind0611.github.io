<template>
  <div class="table-container">
    <p id="unit" class="fixed-p">元/kg</p>
    <div class="showTable">
      <table>
        <thead>
        <tr>
          <th>日期</th>
          <th>農曆</th>
          <th>白肉雞(2.0Kg以上)</th>
          <th>白肉雞(1.75-1.95Kg)</th>
          <th>白肉雞(門市價高屏)</th>
          <th>雞蛋(產地)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
          <td>{{ item.日期 }}</td>
          <td>{{ item.農曆 }}</td>
          <td>{{ item['白肉雞(2.0Kg以上)'] }}</td>
          <td>{{ item['白肉雞(1.75-1.95Kg)'] }}</td>
          <td>{{ item['白肉雞(門市價高屏)'] }}</td>
          <td>{{ item['雞蛋(產地)'] }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #6b5b30;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #e1e5a2;
}

.table-container {
  position: relative;
}
.fixed-p {
  position: absolute;
  top: -35px;
  right: 0;
  margin: 10px;
}


</style>
