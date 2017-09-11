<template>
  <div id="app">
    <AppHeader></AppHeader>
    <section>
      <AppMenu></AppMenu>
      <div class="content-wrapper">
        <router-view></router-view>
        <AppFooter></AppFooter>
      </div>
    </section>
  </div>
</template>

<script>
  import AppMenu from '@/components/AppMenu';
  import AppHeader from '@/components/AppHeader';
  import AppFooter from '@/components/AppFooter';

  export default {
    name: 'app',
    components: {
      AppMenu,
      AppHeader,
      AppFooter,
    },
  };
</script>

<style>
  @import "assets/style.css";
  @import "styles/index.css";
  @import "../node_modules/flexboxgrid/src/css/flexboxgrid.css";

  section {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .content-wrapper{
    flex: 1;
    display: flex;
    flex-direction: column;
  }

</style>
