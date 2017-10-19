const enerjiGiderleri = {
  yolcu: {
    elektrik: 100,
    motorin: 100,
  },
  yht: {
    elektrik: 100,
    motorin: 100,
  },
  marmaray: {
    elektrik: 100,
    motorin: 100,
  },
  lojistik: {
    elektrik: 100,
    motorin: 100,
  },
  aracBakim: {
    elektrik: 100,
    motorin: 100,
  },
  adf: {
    elektrik: 100,
    motorin: 100,
  },
  genelYonetim: {
    elektrik: 100,
    motorin: 100,
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

export default {
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
      // TODO - Current Year is wrong!!!
      const elektrikFiyat = allState[allState.currentYear].varsayimlar.fiyatlar.elektrikKWS;
      return getters.toplamElektrikKullanimi * elektrikFiyat;
    },
    toplamMotorinKullanimi: state => Object.entries(state)
      .reduce((p, [, value]) => {
        p += value.motorin;
        return p;
      }, 0),
    toplamMotorinGideri: (state, getters, allState) => {
      // TODO - Current Year is wrong!!!
      const motorinFiyat = allState[allState.currentYear].varsayimlar.fiyatlar.motorin;
      return getters.toplamMotorinKullanimi * motorinFiyat;
    },
    toplamGider: (_, getters) => getters.toplamElektrikGideri + getters.toplamMotorinGideri,
    toplamKullanim: (_, getters) => getters.toplamElektrikGideri + getters.toplamMotorinGideri,
  },
};
