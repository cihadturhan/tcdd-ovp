<template>
  <td><input size="9" type="text" value="192,400,000"></td>
</template>

<script>
  export default {
    props: {
      scope: { type: Array, required: true },
    },
  };
</script>

<style scoped>
  td {
    padding: 0;
    border-color: hsla(120, 40%, 50%, 0.8);
  }

  input {
    height: 23px;
    border: none;
    background: hsla(120, 50%, 80%, 0.4);
    text-align: right;
    padding: 0 10px;
    appearance: none;
    width: 100%;
  }
</style>
