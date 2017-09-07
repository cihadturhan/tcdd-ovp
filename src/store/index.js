import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    varsayimlar: {
      2017: {
        buyume: {
          gsyhReelBuyumesi: 0.2,
          gsyhNominalBuyumesi: 5.5,
        },
        dovizKuru: {
          yilSonuDolar: 0,
          yillikOrtalamaDolar: 0,
          yilSonuEuro: 0,
          yillikOrtalamaEuro: 0,
        },
        fiyatlar: {
          gsyhDeflatoru: 10.5,
          hamPetrolBrent: 50,
          tufeYilSonu: 0,
          tufeYillikOrtalama: 0,
          yiUfeYilSonu: 0,
          yiUfeYillikOrtalama: 0,
        },
      },
    },
  },
  getters: {
    gelirlerToplam(state) {
      const y2017 = state.varsayimlar[2017].buyume;
      return y2017.gsyhReelBuyumesi * y2017.gsyhNominalBuyumesi;
    },
    giderlerToplam(state) {
      const y2017 = state.varsayimlar[2017].buyume;
      return y2017.gsyhReelBuyumesi * y2017.gsyhNominalBuyumesi;
    },
    donemKarZarar(state) {
      const y2017 = state.varsayimlar[2017].buyume;
      return y2017.gsyhReelBuyumesi * y2017.gsyhNominalBuyumesi;
    },
  },
  mutations: {
    change(state, { scope, value }) {
      const obj = scope.slice(0, scope.length - 1).reduce((p, c) => p[c], state);
      obj[scope[scope.length - 1]] = value;
    },
  },
});

export default store;
