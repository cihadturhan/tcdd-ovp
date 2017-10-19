import Vue from 'vue';
import Router from 'vue-router';
import Varsayimlar from '@/pages/Varsayimlar.vue';
import FaaliyetGelirleri from '@/pages/FaaliyetGelirleri.vue';
import YukGelirleri from '@/pages/YukGelirleri.vue';
import FaaliyetDisiGelirler from '@/pages/FaaliyetDisiGelirler.vue';
import KamuHizmetYukumlulugu from '@/pages/KamuHizmetYukumlulugu.vue';
import FaaliyetGiderleri from '@/pages/FaaliyetGiderleri.vue';
import EnerjiGiderleri from '@/pages/EnerjiGiderleri.vue';
import AltyapiErisim from '@/pages/AltyapiErisim.vue';
import PersonelGiderleri from '@/pages/PersonelGiderleri.vue';
import FaaliyetDisiGiderler from '@/pages/FaaliyetDisiGiderler.vue';
import GenelIcmal from '@/pages/GenelIcmal.vue';
import Grafikler from '@/pages/Grafikler.vue';

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
      path: '/yuk-gelirleri',
      name: 'Yük Gelirleri',
      component: YukGelirleri,
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
    },
    {
      path: '/enerji-giderleri',
      name: 'Enerji Giderleri',
      component: EnerjiGiderleri,
    },
    {
      path: '/altyapi-erisim',
      name: 'Altyapı Erişim',
      component: AltyapiErisim,
    },
    {
      path: '/personel-giderleri',
      name: 'Personel Giderleri',
      component: PersonelGiderleri,
    },
    {
      path: '/faaliyet-disi-giderler',
      name: 'Faaliyet Dışı Giderler',
      component: FaaliyetDisiGiderler,
    }, {
      path: '/genel-icmal',
      name: 'Genel İcmal',
      component: GenelIcmal,
    }, {
      path: '/grafikler',
      name: 'Grafikler',
      component: Grafikler,
    },
    { path: '*', redirect: '/varsayimlar' },
  ],
});
