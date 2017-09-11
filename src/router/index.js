import Vue from 'vue';
import Router from 'vue-router';
import Varsayimlar from '@/components/Varsayimlar';
import FaaliyetGelirleri from '@/components/FaaliyetGelirleri';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/varsayimlar',
      name: 'Varsayimlar',
      component: Varsayimlar,
    },
    {
      path: '/faaliyet-gelirleri',
      name: 'Faaliyet Gelirleri',
      component: FaaliyetGelirleri,
    },
    { path: '*', redirect: '/varsayimlar' },
  ],
});
