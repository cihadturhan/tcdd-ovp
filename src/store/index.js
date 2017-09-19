import Vue from 'vue';
import Vuex from 'vuex';
import { beforeLastScope, lastScope, lastItem } from '../util';

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
    faaliyetGelirleri: {
      2017: {
        banliyo: {
          marmaray: {
            gelir: 0,
            yolcuSayisi: 0,
            yolcuKm: 0,
          },
          ankara: {
            gelir: 0,
            yolcuSayisi: 0,
            yolcuKm: 0,
          },
        },
        anahat: {
          konvansiyonel: {
            yurtici: {
              gelir: 1000,
              yolcuSayisi: 90,
              yolcuKm: 70,
            },
            uluslararasi: {
              gelir: 0,
              yolcuSayisi: 0,
              yolcuKm: 0,
            },
          },
          yht: {
            ankaraEskisehir: {
              gelir: 0,
              yolcuSayisi: 0,
              yolcuKm: 0,
            },
            konyaAnkara: {
              gelir: 10,
              yolcuSayisi: 0,
              yolcuKm: 12,
            },
            ankaraIstanbul: {
              gelir: 0,
              yolcuSayisi: 0,
              yolcuKm: 0,
            },
            konyaIstanbul: {
              gelir: 10,
              yolcuSayisi: 20,
              yolcuKm: 0,
            },
          },
        },

      },
    },
  },
  getters: {
    birimGelir(state) {
      return (scope) => {
        // ['faaliyetGelirleri', '2017', 'banliyo', 'marmaray']
        // ['faaliyetGelirleri', '2017', 'anahat', 'yht', 'konyaAnkara']
        const item = lastScope(state, scope);
        return { value: item.yolcuKm === 0 ? 0 : item.gelir / item.yolcuKm };
      };
    },
    gelirToplam(state) {
      // ['faaliyetGelirleri', '2017', 'banliyo'']
      // ['faaliyetGelirleri', '2017', 'anahat', 'yht']
      // ['faaliyetGelirleri', '2017', 'anahat', 'konvansiyonel']
      return (scope) => {
        const item = lastScope(state, scope);
        return Object.values(item).reduce((prev, curr) => {
          const p = prev;
          p.gelir += curr.gelir;
          p.yolcuSayisi += curr.yolcuSayisi;
          p.yolcuKm += curr.yolcuKm;
          return p;
        }, {
          gelir: 0,
          yolcuSayisi: 0,
          yolcuKm: 0,
        });
      };
    },
    toplamBirimGelir(state, getters) {
      return (scope) => {
        const item = getters.gelirToplam(scope);
        return { value: item.yolcuKm === 0 ? 0 : item.gelir / item.yolcuKm };
      };
    },
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
      if (isNaN(value) || value === null || typeof value === 'undefined') {
        return;
      }
      const obj = beforeLastScope(state, scope);
      obj[lastItem(scope)] = value;
    },
  },
});

export default store;
