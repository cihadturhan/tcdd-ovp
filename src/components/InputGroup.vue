<template>
  <div class="input-group">
    <AutoInput className="text-input"
               :scope="scope"
               :disabled="disabled"
               :getterName="getterName" />
    <div class="input-group-addon">
      <span>{{type}}</span>
    </div>
  </div>
</template>

<script>
  import AutoInput from './AutoInput';

  export default {
    props: {
      type: String,
      disabled: Boolean,
      getterName: String,
      scope: { type: Array },
    },
    components: {
      AutoInput,
    },
  };
</script>

<style scoped>
  @import '../styles/colors.css';
  .input-group {
    display: flex;
  }

  .input-group-addon {
    background: rgba(6, 129, 204, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
</style>


