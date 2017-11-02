const trenHamtonKm = {
  marmaray: {
    title: 'Marmaray',
    carpan: 0,
    deger: 0,
  },
  ankara: {
    title: 'Ankara',
    carpan: 0,
    deger: 0,
  },
  baskentRay: {
    title: 'Başkent Ray',
    carpan: 0,
    deger: 0,
  },
  yht: {
    title: 'YHT',
    carpan: 0,
    deger: 0,
  },
  yolcu: {
    title: 'Anahat',
    carpan: 0,
    deger: 0,
  },
  lojistik: {
    title: 'Lojistik',
    carpan: 0,
    deger: 0,
  },
};

const altyapiErisimGiderleri = Object.keys(trenHamtonKm).reduce((p, key) => {
  p[`${key}/gider`] = state => state.trenHamtonKm[key].carpan * state.trenHamtonKm[key].deger;
  return p;
}, {});

export default (year) => ({ // eslint-disable-line
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
});
