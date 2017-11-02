const personelBilgileri = {
  yolcu: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
  yht: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
  marmaray: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
  lojistik: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
  aracBakim: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
  adf: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
  genelYonetim: {
    memur: { adet: 0, ortalamaAylikUcret: 0 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 0 },
    daimi: { adet: 0, ortalamaAylikUcret: 0 },
    gecici: { adet: 0, ortalamaAylikUcret: 0 },
  },
};

const personelAdetleri = Object.keys(personelBilgileri).reduce((p, key) => {
  p[`${key}/personelAdeti`] = state => Object.values(state[key]).reduce(
    (pp, { adet }) => pp + adet,
    0);
  return p;
}, {});

export default (year) => {
  const trenPersonelGiderleri = Object.entries(personelBilgileri).reduce((prev, [key, values]) => {
    const p = Object.entries(values).reduce((pprev, [meslek]) => {
      pprev[`${key}/${meslek}/personelGideri`] = (state, getters, globalState, globalGetter) => {
        const { adet, ortalamaAylikUcret } = state[key][meslek];
        const maasTipi = meslek === 'memur' ? 'memurMaasi' : 'kamuIscisiUcreti';
        const yillikOrtalamaArtis = globalGetter[`${year}/varsayimlar/${maasTipi}/ortalama`];
        return (adet * ortalamaAylikUcret * (1 + (yillikOrtalamaArtis / 100)) * 12);
      };
      return pprev;
    }, {});
    return { ...prev, ...p };
  }, {});


  const personelGiderleri = Object.keys(personelBilgileri).reduce((p, key) => {
    p[`${key}/personelGideri`] = (state, getters) => Object.keys(state[key]).reduce(
      (pp, meslek) => pp + getters[`${key}/${meslek}/personelGideri`], 0);
    return p;
  }, {});

  const trenGiderleri = Object.keys(personelBilgileri.yolcu).reduce((p, meslek) => {
    p[`${meslek}/personelGideri`] = (state, getters) => Object.keys(state).reduce(
      (pp, key) => pp + getters[`${key}/${meslek}/personelGideri`], 0);
    return p;
  }, {});

  return { // eslint-disable-line
    namespaced: true,
    state() {
      return { ...personelBilgileri };
    },
    getters: {
      ...trenPersonelGiderleri,
      ...trenGiderleri,
      ...personelGiderleri,
      ...personelAdetleri,
      toplamGider: (state, getter) => Object.keys(personelGiderleri)
        .reduce((p, key) => p + getter[key], 0),
    },
  };
};
