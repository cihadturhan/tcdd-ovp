<template>
  <td>
    <AutoInput :scope="scope"
               :disabled="disabled"
               :divider="divider"
               :fixed="fixed"
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
      divider: { type: Number },
      fixed: { type: Number },
    },
    components: {
      AutoInput,
    },
  };
</script>

<style scoped>
  td {
    padding: 0;
    border-color: hsla(100, 50%, 50%, 0.8);
  }

  input {
    height: 24px;
    border: none;
    background: hsla(100, 60%, 70%, .5);
    text-align: right;
    padding: 0 3px;
    appearance: none;
    width: 100%;
  }
</style>
