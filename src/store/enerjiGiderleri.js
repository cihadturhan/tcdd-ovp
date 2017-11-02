const enerjiGiderleri = {
  yolcu: {
    elektrik: 0,
    motorin: 0,
  },
  yht: {
    elektrik: 0,
    motorin: 0,
  },
  marmaray: {
    elektrik: 0,
    motorin: 0,
  },
  lojistik: {
    elektrik: 0,
    motorin: 0,
  },
  aracBakim: {
    elektrik: 0,
    motorin: 0,
  },
  adf: {
    elektrik: 0,
    motorin: 0,
  },
  genelYonetim: {
    elektrik: 0,
    motorin: 0,
  },
};

const elektrikGiderleri = Object.keys(enerjiGiderleri).reduce((p, key) => {
  p[`${key}/elektrikGideri`] = (state, getters, allState) => {
    const elektrikFiyat = allState[allState.currentYear].varsayimlar.fiyatlar.elektrikKWS;
    return state[key].elektrik * elektrikFiyat;
  };
  return p;
}, {});

const motorinGiderleri = Object.keys(enerjiGiderleri).reduce((p, key) => {
  p[`${key}/motorinGideri`] = (state, getters, allState) => {
    const motorinFiyat = allState[allState.currentYear].varsayimlar.fiyatlar.motorin;
    return state[key].motorin * motorinFiyat;
  };
  return p;
}, {});

const toplamGiderler = Object.keys(enerjiGiderleri).reduce((p, key) => {
  p[`${key}/toplamGider`] = (s, getters) => getters[`${key}/elektrikGideri`] + getters[`${key}/motorinGideri`];
  return p;
}, {});

export default (year) => ({ // eslint-disable-line
  namespaced: true,
  state() {
    return { ...enerjiGiderleri };
  },
  getters: {
    ...elektrikGiderleri,
    ...motorinGiderleri,
    ...toplamGiderler,
    toplamElektrikKullanimi: state => Object.entries(state)
      .reduce((p, [, value]) => {
        p += value.elektrik;
        return p;
      }, 0),
    toplamElektrikGideri: (state, getters, allState) => {
      const elektrikFiyat = allState[year].varsayimlar.fiyatlar.elektrikKWS;
      return getters.toplamElektrikKullanimi * elektrikFiyat;
    },
    toplamMotorinKullanimi: state => Object.entries(state)
      .reduce((p, [, value]) => {
        p += value.motorin;
        return p;
      }, 0),
    toplamMotorinGideri: (state, getters, allState) => {
      const motorinFiyat = allState[year].varsayimlar.fiyatlar.motorin;
      return getters.toplamMotorinKullanimi * motorinFiyat;
    },
    toplamGider: (_, getters) => getters.toplamElektrikGideri + getters.toplamMotorinGideri,
    toplamKullanim: (_, getters) => getters.toplamElektrikGideri + getters.toplamMotorinGideri,
  },
});
