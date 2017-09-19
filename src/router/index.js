import Vue from 'vue';
import Router from 'vue-router';
import Varsayimlar from '@/pages/Varsayimlar';
import FaaliyetGelirleri from '@/pages/FaaliyetGelirleri';
import FaaliyetDisiGelirler from '@/pages/FaaliyetDisiGelirler';
import KamuHizmetYukumlulugu from '@/pages/KamuHizmetYukumlulugu';
import FaaliyetGiderleri from '@/pages/FaaliyetGiderleri';
import FaaliyetDisiGiderler from '@/pages/FaaliyetDisiGiderler';
import GenelIcmal from '@/pages/GenelIcmal';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/varsayimlar',
      name: 'Varsayimlar',
      component: Varsayimlar,
    }, {
      path: '/faaliyet-gelirleri',
      name: 'Faaliyet Gelirleri',
      component: FaaliyetGelirleri,
    }, {
      path: '/faaliyet-disi-gelirler',
      name: 'Faaliyet Dışı Gelirler',
      component: FaaliyetDisiGelirler,
    }, {
      path: '/kamu-hizmet-yukumlulugu',
      name: 'Kamu Hizmet Yükümlülüğü',
      component: KamuHizmetYukumlulugu,
    }, {
      path: '/faaliyet-giderleri',
      name: 'Faaliyet Giderleri',
      component: FaaliyetGiderleri,
    }, {
      path: '/faaliyet-disi-giderler',
      name: 'Faaliyet Dışı Giderler',
      component: FaaliyetDisiGiderler,
    }, {
      path: '/genel-icmal',
      name: 'Genel İcmal',
      component: GenelIcmal,
    },
    { path: '*', redirect: '/varsayimlar' },
  ],
});
