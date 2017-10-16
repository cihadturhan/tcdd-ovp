import Vue from 'vue';
import Vuex from 'vuex';
import { beforeLastScope, lastScope, lastItem } from '../util';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    currentYear: 2017,
    minYear: 2017,
    maxYear: 2017,
  },
  getters: {
    birimGelir(state) {
      return (scope) => {
        // ['2017', 'faaliyetGelirleri', 'banliyo', 'marmaray']
        // ['2017', 'faaliyetGelirleri','anahat', 'yht', 'konyaAnkara']
        const item = lastScope(state, scope);
        return item.yolcuKm === 0 ? 0 : item.gelir / item.yolcuKm;
      };
    },
    // ['2017', 'faaliyetGelirleri', 'banliyo']
    // ['2017', 'faaliyetGelirleri', 'anahat', 'yht']
    // ['2017', 'faaliyetGelirleri', 'anahat', 'konvansiyonel']
    toplamGelir(state) {
      return (scope) => {
        const item = lastScope(state, scope);
        return Object.values(item).reduce((prev, curr) => prev + curr.gelir, 0);
      };
    },
    toplamYolcuSayisi(state) {
      return (scope) => {
        const item = lastScope(state, scope);
        return Object.values(item).reduce((prev, curr) => prev + curr.yolcuSayisi, 0);
      };
    },
    toplamYolcuKm(state) {
      return (scope) => {
        const item = lastScope(state, scope);
        return Object.values(item).reduce((prev, curr) => prev + curr.yolcuKm, 0);
      };
    },
    toplamBirimGelir(state, getters) {
      return (scope) => {
        const item = getters.toplamGelir(scope);
        return item.yolcuKm === 0 ? 0 : item.gelir / item.yolcuKm;
      };
    },
    gelirlerToplam(state) {
      const yil = state[state.currentYear].varsayimlar;
      return 19120 * yil.fiyatlar.hamPetrolBrent
        * (yil.fiyatlar.gsyhDeflatoru / 10)
        * (yil.fiyatlar.tufeYilSonu / 10) * (yil.fiyatlar.yiUfeYilSonu / 10)
        * yil.buyume.gsyhReelBuyumesi * yil.buyume.gsyhNominalBuyumesi;
    },
    giderlerToplam(state) {
      const yil = state[state.currentYear].varsayimlar;
      return 120 * yil.dovizKuru.yillikOrtalamaDolar * yil.dovizKuru.yillikOrtalamaEuro
        * (yil.fiyatlar.tufeYilSonu / 10) * (yil.fiyatlar.yiUfeYilSonu / 10)
        * (1 + yil.memurMaasi.iDonem) * (1 + yil.memurMaasi.iiDonem)
        * (1 + yil.kamuIscisiUcreti.iDonem) * (1 + yil.kamuIscisiUcreti.iiDonem)
        * yil.buyume.gsyhNominalBuyumesi * yil.buyume.gsyhReelBuyumesi;
    },
    donemKarZarar(state, getters) {
      return getters.gelirlerToplam - getters.giderlerToplam;
    },
  },
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
  },
});

export default store;
