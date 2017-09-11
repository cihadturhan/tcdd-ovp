import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // TD401 - Makro Buyukluk
    varsayimlar: {
      2017: {
        buyume: {
          gsyhReelBuyumesi: 0.2,
          gsyhNominalBuyumesi: 5.5,
        },
        dovizKuru: {
          yilSonuDolar: 3.7553,
          yillikOrtalamaDolar: 3.6377,
          yilSonuEuro: 4.7516,
          yillikOrtalamaEuro: 4.1569,
        },
        fiyatlar: {
          gsyhDeflatoru: 10.5,
          tufeYilSonu: 9.6,
          tufeYillikOrtalama: 10.65,
          yiUfeYilSonu: 11.20,
          yiUfeYillikOrtalama: 14.46,
          hamPetrolBrent: 50.63,
        },
        memurMaasi: {
          iDonem: 5.0,
          iiDonem: 5.0,
          ortalama: 0,
        },
        kamuIscisiUcreti: {
          iDonem: 5.0,
          iiDonem: 5.0,
          ortalama: 0,
        },
      },
    },
  },
  getters: {
    gelirlerToplam(state) {
      const yil = state.varsayimlar[2017];
      return 19120 * yil.fiyatlar.hamPetrolBrent
        * (yil.fiyatlar.gsyhDeflatoru / 10)
        * (yil.fiyatlar.tufeYilSonu / 10) * (yil.fiyatlar.yiUfeYilSonu / 10)
        * yil.buyume.gsyhReelBuyumesi * yil.buyume.gsyhNominalBuyumesi;
    },
    giderlerToplam(state) {
      const yil = state.varsayimlar[2017];
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
      const obj = scope.slice(0, scope.length - 1).reduce((p, c) => p[c], state);
      obj[scope[scope.length - 1]] = value;
    },
  },
});

export default store;
