import Vue from 'vue';
import Vuex from 'vuex';
import qs from 'qs';
import axios from 'axios';
import moment from 'moment';

import { rows, host } from '@/util/config';
import { beforeLastScope, lastItem } from '@/util';
import { loadYears, removeYear } from './util';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    saveInProgress: false,
    currentYear: null,
    minYear: 2017,
    maxYear: 2017,
    loggedIn: false,
    lastOVP: {},
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
    addYear(state, { year }) {
      if (year > state.maxYear) {
        state.maxYear = year;
      } else {
        state.minYear = year;
      }
    },
    setYear(state, { year }) {
      state.currentYear = year;
    },
    removeYear(state, { year }) {
      removeYear(store, year);
    },
    setJsonContent(state, { jsonContent }) {
      state.maxYear = jsonContent.maxYear;
      state.minYear = jsonContent.minYear;
      state.currentYear = jsonContent.currentYear;
      loadYears(store, jsonContent);
    },
    setLastOVP(state, { createdAt }) {
      state.lastOVP = { createdAt };
    },
  },
  actions: {
    getLastOVP(context) {
      axios.get(`${host}/application/getLastOVP`, { withCredentials: true }).then((response) => {
        context.commit('setLastOVP', {
          createdAt: moment(response.data.olusturulmaTarihi, 'MMM DD, YYYY HH:mm:ss A'),
        });
        context.commit('setJsonContent', {
          jsonContent: JSON.parse(response.data.JSON),
        });
      });
    },
    addOVP(context) {
      context.state.saveInProgress = true;
      axios.post(`${host}/application/addOVP`, qs.stringify({
        'ovp.JSON': JSON.stringify(context.state),
      }), { withCredentials: true }).then(() => {
        context.commit('setLastOVP', {
          createdAt: moment(),
        });
        context.state.saveInProgress = false;
      }).catch(() => {
        context.state.saveInProgress = false;
      });
    },
  },
});

export default store;
