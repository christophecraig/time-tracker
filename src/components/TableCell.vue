<template>
  <tr>
    <td v-for="(cell, i) in data" :key="i">{{cell}}</td>
  </tr>
</template>
<script>
export default {
  name: "TableCell",
  props: ["data"],
};
</script>
