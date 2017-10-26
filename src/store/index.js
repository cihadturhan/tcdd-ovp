import Vue from 'vue';
import Vuex from 'vuex';
import qs from 'qs';
import axios from 'axios';

import { rows, host } from '@/util/config';
import { beforeLastScope, lastItem } from '@/util';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    currentYear: 2017,
    minYear: 2017,
    maxYear: 2017,
    loggedIn: false,
    user: {},
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
    updateUser(state, { user }) {
      state.user = user;
      state.loggedIn = !!user.username;
    },
    addYear(state) {
      state.maxYear += 1;
    },
    setYear(state, { year }) {
      state.currentYear = year;
    },
  },
  actions: {
    getLastOVP() {
      axios.get(`${host}/application/getLastOVP`, { withCredentials: true }).then(() => 1);
    },
    addOVP(data) {
      axios.post(`${host}/application/addOVP`, qs.stringify({
        'ovp.JSON': JSON.stringify(data),
      }), { withCredentials: true });
    },
  },
});

export default store;
