<template>
  <div class="varsayilanlar">
    <Tabs :tabs="tabs" :scope="scope"></Tabs>
  </div>
</template>

<script>

  import Tabs from './Tabs';
  import Fields from './Varsayimlar/Fields';

  export default {
    name: 'hello',
    data() {
      return {
        tabs: [
          { title: '2017', content: Fields },
          /*{ title: '2018', content: Fields },
          { title: '2019', content: Fields },
          { title: '2020', content: Fields },*/
        ],
        scope: ['varsayimlar'],
      };
    },
    watch: {
      totalProfit() {
        // eslint-disable-next-line
        console.error('totalProfit');
      },
    },
    components: {
      Tabs,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .varsayilanlar {
    overflow: auto;
    font-weight: normal;
    flex: 1;
    background-color: #EBF0F5;
    display: flex;
    align-items: stretch;
    padding-bottom: 400px;
  }
</style>
