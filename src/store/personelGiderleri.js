export default {
  namespaced: true,
  state() {
    return {
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
  },
  getters: {
    toplam: state => state.yurtici.gelir / state.yurtici.netTonKm,
  },
};
