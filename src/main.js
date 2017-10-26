// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import RecursiveTableRow from '@/global/RecursiveTableRow.vue';

import AppMain from './Main.vue';
import store from './store';


Vue.config.productionTip = false;

Vue.component('recursive-table-row', RecursiveTableRow);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<AppMain/>',
  components: { AppMain },
});
