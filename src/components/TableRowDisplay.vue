<template>
  <td>
    {{dividedValue}}
  </td>
</template>

<script>
  import InputWrapper from './InputWrapper.vue';

  export default {
    extends: InputWrapper,
  };
</script>

<style scoped>
  td{
    padding-right: 18px;
  }
</style>
