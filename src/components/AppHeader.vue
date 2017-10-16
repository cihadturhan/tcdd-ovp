<template>
  <header>
    <img src="../assets/logo.svg">
    <h1 class="lead brand">
      <span>TCDD TAŞIMACILIK A.Ş. GENEL MÜDÜRLÜĞÜ</span> <br/>
      <span>ORTA VADELİ PLAN ÇALIŞMASI</span>
    </h1>
  </header>
</template>

<script>
  export default {
    name: 'header',
  };
</script>

<style scoped>
  @import '../styles/colors.css';

  header{
    background-color: #1D1E28;
    text-align: left;
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }

  .brand{
    color: var(--white);
    flex: auto;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 10px;
  }
</style>
