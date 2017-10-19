const personelBilgileri = {
  yolcu: {
    memur: { adet: 10, ortalamaAylikUcret: 6500 },
    sozlesmeli: { adet: 20, ortalamaAylikUcret: 6000 },
    daimi: { adet: 25, ortalamaAylikUcret: 4000 },
    gecici: { adet: 50, ortalamaAylikUcret: 5500 },
  },
  yht: {
    memur: { adet: 20, ortalamaAylikUcret: 6500 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 6000 },
    daimi: { adet: 0, ortalamaAylikUcret: 4000 },
    gecici: { adet: 0, ortalamaAylikUcret: 5500 },
  },
  marmaray: {
    memur: { adet: 15, ortalamaAylikUcret: 6500 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 6000 },
    daimi: { adet: 0, ortalamaAylikUcret: 4000 },
    gecici: { adet: 0, ortalamaAylikUcret: 5500 },
  },
  lojistik: {
    memur: { adet: 10, ortalamaAylikUcret: 6500 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 6000 },
    daimi: { adet: 0, ortalamaAylikUcret: 4000 },
    gecici: { adet: 0, ortalamaAylikUcret: 5500 },
  },
  aracBakim: {
    memur: { adet: 40, ortalamaAylikUcret: 6500 },
    sozlesmeli: { adet: 0, ortalamaAylikUcret: 6000 },
    daimi: { adet: 0, ortalamaAylikUcret: 4000 },
    gecici: { adet: 0, ortalamaAylikUcret: 5500 },
  },
  adf: {
    memur: { adet: 40, ortalamaAylikUcret: 6500 },
    sozlesmeli: { adet: 10, ortalamaAylikUcret: 6000 },
    daimi: { adet: 20, ortalamaAylikUcret: 4000 },
    gecici: { adet: 0, ortalamaAylikUcret: 5500 },
  },
  genelYonetim: {
    memur: { adet: 10, ortalamaAylikUcret: 8500 },
    sozlesmeli: { adet: 20, ortalamaAylikUcret: 8000 },
    daimi: { adet: 20, ortalamaAylikUcret: 4000 },
    gecici: { adet: 0, ortalamaAylikUcret: 5500 },
  },
};

const personelGiderleri = Object.keys(personelBilgileri).reduce((p, key) => {
  p[`${key}/personelGideri`] = state => Object.values(state[key]).reduce(
    (pp, { adet, ortalamaAylikUcret }) => pp + (adet * ortalamaAylikUcret),
    0);
  return p;
}, {});

const personelAdetleri = Object.keys(personelBilgileri).reduce((p, key) => {
  p[`${key}/personelAdeti`] = state => Object.values(state[key]).reduce(
    (pp, { adet }) => pp + adet,
    0);
  return p;
}, {});

export default {
  namespaced: true,
  state() {
    return { ...personelBilgileri };
  },
  getters: {
    ...personelGiderleri,
    ...personelAdetleri,
    toplamGider: state => Object.values(state).reduce((p, value) => {
      const current = Object.values(value).reduce((pp, vvalue) => {
        pp += (vvalue.adet * vvalue.ortalamaAylikUcret);
        return pp;
      }, 0);
      return p + current;
    }, 0),
  },
};
