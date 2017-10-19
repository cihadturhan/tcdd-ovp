<template>
  <footer>
    <button class="prev"><i class="icon-arrow-left"></i><span>Geri</span></button>
    <AppSummary :scope="scope"></AppSummary>
    <button class="next"><span>İleri</span><i class="icon-arrow-right"></i></button>
  </footer>
</template>

<script>
  import AppSummary from './Summary';

  export default {
    props: {
      scope: [Array],
    },
    components: {
      AppSummary,
    },
  };

</script>

<style scoped>
  @import '../styles/colors.css';
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
    cursor: pointer;
  }
  i{
    font-size: 30px;
    vertical-align: center;
    line-height: 30px;
  }
  footer{
    position: relative;
    height: 60px;
    background: var(--full-white);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: 0 0px 1px rgba(0, 0, 0, .09), 0 0px 10px rgba(0, 0, 0, .09);
  }
</style>
