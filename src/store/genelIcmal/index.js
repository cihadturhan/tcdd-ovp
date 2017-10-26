import { generateGetters } from './util';

import faaliyetDisiGelirler from './faaliyetDisiGelirler';
import kamuHizmetYukumlulugu from './kamuHizmetYukumlulugu';
import giderlerGenerator from './giderler/';

const outerState = {
  faaliyetDisiGelirler,
  kamuHizmetYukumlulugu,
  faaliyetGelirleri: {
    yurtici: {
      diger: 3337000,
      anahat: 78256000,
    },
  },
};

const outerGetters = generateGetters(outerState);

export default (year) => {
  const giderler = giderlerGenerator(year);

  const columns = ['yolcu', 'lojistik', 'yht', 'marmaray'];
  const faaliyetGelirleriToplamGelir = columns.reduce((prev, key) => {
    prev[`faaliyetGelirleri/${key}/toplamGelir`] = (state, getters, globalState, globalGetters) =>
      getters[`kamuHizmetYukumlulugu/${key}/toplamGelir`] +
      (key === 'lojistik' ? globalGetters[`${year}/yukGelirleri/toplamGelir`] : 0) +
      getters[`faaliyetGelirleri/${key}/yolcuGelir`];
    return prev;
  }, {});

  const gelirlerToplam = columns.reduce((prev, key) => {
    prev[`gelirler/${key}/toplamGelir`] = (state, getters) =>
      getters[`faaliyetDisiGelirler/${key}/toplamGelir`] +
      getters[`faaliyetGelirleri/${key}/toplamGelir`];
    return prev;
  }, {});


  return {
    namespaced: true,
    state() {
      return { ...outerState, ...giderler.state };
    },
    getters: {
      'faaliyetGelirleri/yurtici/yolcu/toplam': (state, getters, globalState) => {
        const banliyo = globalState[year].faaliyetGelirleri.banliyo;
        return banliyo.ankara.gelir +
          state.faaliyetGelirleri.yurtici.diger +
          state.faaliyetGelirleri.yurtici.anahat;
      },
      'faaliyetGelirleri/yurtici/lojistik/toplam': () => 0,
      'faaliyetGelirleri/yurtici/yht/toplam': (state, getters, globalState, globalGetter) =>
        globalGetter[`${year}/faaliyetGelirleri/anahat/yht/toplamGelir`],
      'faaliyetGelirleri/yurtici/marmaray/toplam': (state, getters, globalState) =>
        globalState[year].faaliyetGelirleri.banliyo.marmaray.gelir,
      'faaliyetGelirleri/yolcu/yolcuGelir': (state, getters, globalState) =>
        getters['faaliyetGelirleri/yurtici/yolcu/toplam'] +
        globalState[year].faaliyetGelirleri.anahat.konvansiyonel.uluslararasi.gelir,
      'faaliyetGelirleri/lojistik/yolcuGelir': () => 0,
      'faaliyetGelirleri/yht/yolcuGelir': (state, getters) =>
        getters['faaliyetGelirleri/yurtici/yht/toplam'],
      'faaliyetGelirleri/marmaray/yolcuGelir': (state, getters, globalState) =>
        globalState[year].faaliyetGelirleri.banliyo.marmaray.gelir,
      'faaliyetGelirleri/yolcuGelir/toplam': (state, getters, globalState) => {
        const rows = globalState.rows;
        rows.reduce((prev, row) => {
          const value = getters[`faaliyetGelirleri/${row.key}/toplam`];
          return value ? prev + value : prev;
        }, 0);
      },
      'gelirler/toplam': (state, getters) => columns.reduce((prev, column) => {
        const value = getters[`gelirler/${column}/toplamGelir`];
        return value ? prev + value : prev;
      }, 0),
      'giderler/toplam': () => 2781407000,
      ...faaliyetGelirleriToplamGelir,
      ...gelirlerToplam,
      ...outerGetters,
    },
  };
};
