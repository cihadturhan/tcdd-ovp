<template>
  <div>
    <h2 class="fieldset-label">BÜYÜME</h2>
    <div class="field-group">
      <label class="field-label">GSYH Reel Büyümesi</label>
      <InputGroup type="%" :scope="[...scope, 'buyume', 'gsyhReelBuyumesi']"/>
    </div>

    <div class="field-group">
      <label class="field-label">GSYH Nominal Büyümesi</label>
      <InputGroup type="%" :scope="[...scope, 'buyume', 'gsyhNominalBuyumesi']"/>
    </div>
  </div>
</template>

<script>
  import InputGroup from '@/components/InputGroup';

  export default {
    name: 'fields',
    props: {
      scope: Array,
    },
    data() {
      return {};
    },
    components: {
      InputGroup,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .field-group{
    display: flex;
    justify-content: space-between;
  }
</style>
