const trenHamtonKm = {
  marmaray: {
    title: 'Marmaray',
    carpan: 4,
    deger: 1099000,
  },
  ankara: {
    title: 'Ankara',
    carpan: 4,
    deger: 54250,
  },
  baskentRay: {
    title: 'Başkent Ray',
    carpan: 4,
    deger: 0,
  },
  yht: {
    title: 'YHT',
    carpan: 6,
    deger: 3903520,
  },
  anahat: {
    title: 'Anahat',
    carpan: 4,
    deger: 3903520,
  },
  lojistik: {
    title: 'Lojistik',
    carpan: 5,
    deger: 3903520,
  },
};

const altyapiErisimGiderleri = Object.keys(trenHamtonKm).reduce((p, key) => {
  p[`${key}/gider`] = state => state.trenHamtonKm[key].carpan * state.trenHamtonKm[key].deger;
  return p;
}, {});

export default {
  namespaced: true,
  state() {
    return {
      trenHamtonKm: { ...trenHamtonKm },
    };
  },
  getters: {
    ...altyapiErisimGiderleri,
    toplamBanliyo: state => ['marmaray', 'ankara', 'baskentRay']
      .map(key => state.trenHamtonKm[key])
      .reduce((p, obj) => p + (obj.carpan * obj.deger), 0),
    toplamGider: (state, getters) => Object
      .keys(altyapiErisimGiderleri)
      .reduce((p, curr) => p + getters[curr], 0),
  },
};
