export default (year) => ({  // eslint-disable-line
  namespaced: true,
  state() {
    return {
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
        elektrikKWS: 0.314096,
        motorin: 4.80,
      },
      memurMaasi: {
        iDonem: 5.0,
        iiDonem: 5.0,
      },
      kamuIscisiUcreti: {
        iDonem: 5.0,
        iiDonem: 5.0,
      },
    };
  },
  getters: {
    'memurMaasi/ortalama': state => (state.memurMaasi.iDonem * (6 / 12)) +
      ((((100 + state.memurMaasi.iDonem) *
        ((100 + state.memurMaasi.iiDonem) / 100)) - 100) * (6 / 12)),
    'kamuIscisiUcreti/ortalama': state => (/* 0 * 3/12 + */
      state.kamuIscisiUcreti.iDonem * (6 / 12)) +
      ((((100 + state.kamuIscisiUcreti.iDonem) *
        ((100 + state.kamuIscisiUcreti.iiDonem) / 100)) - 100) * (3 / 12)),
  },
});
