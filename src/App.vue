<template>
  <div id="app">
    <AppHeader></AppHeader>
    <section>
      <AppMenu></AppMenu>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import { addNewYear } from '@/util';
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
    created() {
      /*eslint-disable*/
      console.log(this.$store);
      addNewYear(this.$store, this.$store.state.minYear);
      console.log(this.$store);
    },
  };
</script>

<style lang="postcss">
  @import "styles/icons.css";
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
