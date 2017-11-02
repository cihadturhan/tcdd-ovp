<template>
  <div id="app">
    <template v-if="loggedIn">
      <AppHeader></AppHeader>
      <section>
        <AppMenu></AppMenu>
        <router-view></router-view>
      </section>
    </template>
    <router-view v-else/>
  </div>
</template>

<script>
  import AppMenu from '@/components/AppMenu';
  import AppHeader from '@/components/AppHeader';
  import AppFooter from '@/components/AppFooter';
  import router from './router/mainRouter';

  export default {
    name: 'main',
    components: {
      AppMenu,
      AppHeader,
      AppFooter,
    },
    watch: {
      loggedIn() {

      },
    },
    computed: {
      loggedIn() {
        return this.$store.state.loggedIn;
      },
    },
    router,
    created() {
      this.$router.beforeEach((to, from, next) => {
        if (to.name !== 'Login' && !this.loggedIn) {
          return next({ name: 'Login' });
        } else if (to.name === 'Login' && this.loggedIn) {
          return next({ name: 'Anasayfa' });
        }
        return next();
      });

      if (this.$route.name !== 'Login' && !this.loggedIn) {
        this.$router.push({ name: 'Login' });
      } else if (this.$route.name === 'Login' && this.loggedIn) {
        this.$router.push({ name: 'Anasayfa' });
      }
    },
  };
</script>

<style lang="postcss">
  @import "styles/index.css";
  @import "../node_modules/flexboxgrid/src/css/flexboxgrid.css";

  section {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

</style>
