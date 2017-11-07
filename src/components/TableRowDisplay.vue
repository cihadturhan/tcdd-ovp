<template>
  <td class="display">
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
  .display{
    padding-right: 5px;
  }
</style>
