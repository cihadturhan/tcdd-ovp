<template>
  <footer>
    <button class="prev"><i class="icon-arrow-left"></i><span>Geri</span></button>
    <AppSummary></AppSummary>
    <button class="next"><span>İleri</span><i class="icon-arrow-right"></i></button>
  </footer>
</template>

<script>
  import AppSummary from './Summary';

  export default {
    components: {
      AppSummary,
    },
  };

</script>

<style scoped>
  button{
    appearance: none;
    background: none;
    border: none;
    color: var(--tealish);
    font-size: 20px;
    display: flex;
    align-items: center;
    line-height: 20px;
    padding: 10px;
  }
  i{
    font-size: 30px;
    vertical-align: center;
    line-height: 30px;
  }
  footer{
    height: 60px;
    background: var(--full-white);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /*border-top: 1px solid var(--light-blue-grey);*/
  }
</style>
