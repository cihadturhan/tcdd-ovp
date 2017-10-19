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
    rows: [
      { key: 'yolcu', title: 'Yolcu' },
      { key: 'lojistik', title: 'Lojistik' },
      { key: 'yht', title: 'YHT' },
      { key: 'marmaray', title: 'Marmaray' },
      { key: 'adf', title: 'ADF' },
      { key: 'genelYonetim', title: 'Genel Yönetim' },
    ],
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
    toplamBirimGelir(state, getters) {
      return (scope) => {
        const item = getters.toplamGelir(scope);
        return item.yolcuKm === 0 ? 0 : item.gelir / item.yolcuKm;
      };
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
