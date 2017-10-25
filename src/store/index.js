import Vue from 'vue';
import Vuex from 'vuex';

import { rows } from '@/util/config';
import { beforeLastScope, lastItem } from '@/util';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    currentYear: 2017,
    minYear: 2017,
    maxYear: 2017,
    loggedIn: false,
    rows,
  },
  getters: {},
  mutations: {
    change(state, { scope, value }) {
      if (isNaN(value) || value === null || typeof value === 'undefined') {
        return;
      }
      const obj = beforeLastScope(state, scope);
      obj[lastItem(scope)] = value;
    },
    addYear(state) {
      state.maxYear += 1;
    },
    setYear(state, { year }) {
      state.currentYear = year;
    },
    login(state) {
      setTimeout(() => {
        state.loggedIn = true;
      }, 1000);
    },
  },
});

export default store;
