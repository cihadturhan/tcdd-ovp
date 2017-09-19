<template>
    <div class="content-wrapper">
      <div class="content"><Tabs :tabs="tabs" :content="fields" :scope="scope" :on-new-tab-created="onNewTabCreated"></Tabs></div>
      <AppFooter></AppFooter>
    </div>
</template>

<script>
  import Tabs from '@@/Tabs';
  import AppFooter from '@/components/AppFooter';

  export default {
    data() {
      return {
        tabs: [
          { title: '2017' },
          /*{ title: '2018', content: Fields },
          { title: '2019', content: Fields },
          { title: '2020', content: Fields },*/
        ],
      };
    },
    methods: {
      onNewTabCreated() {

      },
    },
    components: {
      AppFooter,
      Tabs,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    overflow: auto;
    font-weight: normal;
    flex: 1;
    background-color: #EBF0F5;
    display: flex;
    align-items: stretch;
    padding-bottom: 400px;
  }
</style>
