<template>
  <td>
    <AutoInput :scope="scope"
               :disabled="disabled"
               :getterName="getterName" />
  </td>
</template>

<script>
  import AutoInput from './AutoInput.vue';

  export default {
    props: {
      scope: { type: Array },
      getterName: { type: String },
      disabled: { type: Boolean },
    },
    components: {
      AutoInput,
    },
  };
</script>

<style scoped>
  td {
    padding: 0;
    border-color: hsla(120, 40%, 50%, 0.8);
  }

  input {
    height: 100%;
    border: none;
    background: hsla(120, 50%, 80%, 0.4);
    text-align: right;
    padding: 0 3px;
    appearance: none;
    width: 100%;
  }
</style>
