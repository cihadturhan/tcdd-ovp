export default (year) => ({  // eslint-disable-line
  namespaced: true,
  state() {
    return {
      buyume: {
        gsyhReelBuyumesi: 0,
        gsyhNominalBuyumesi: 0,
      },
      dovizKuru: {
        yilSonuDolar: 0,
        yillikOrtalamaDolar: 0,
        yilSonuEuro: 0,
        yillikOrtalamaEuro: 0,
      },
      fiyatlar: {
        gsyhDeflatoru: 0,
        tufeYilSonu: 0,
        tufeYillikOrtalama: 0,
        yiUfeYilSonu: 0,
        yiUfeYillikOrtalama: 0,
        hamPetrolBrent: 0,
        elektrikKWS: 0,
        motorin: 0,
      },
      memurMaasi: {
        iDonem: 0,
        iiDonem: 0,
      },
      kamuIscisiUcreti: {
        iDonem: 0,
        iiDonem: 0,
      },
    };
  },
  getters: {
    'memurMaasi/ortalama': state => (state.memurMaasi.iDonem * (6 / 12)) +
      ((((100 + state.memurMaasi.iDonem) *
        ((100 + state.memurMaasi.iiDonem) / 100)) - 100) * (6 / 12)),
    'kamuIscisiUcreti/ortalama': state => (/* 0 * 2/12 + */
      state.kamuIscisiUcreti.iDonem * (6 / 12)) +
      ((((100 + state.kamuIscisiUcreti.iDonem) *
        ((100 + state.kamuIscisiUcreti.iiDonem) / 100)) - 100) * (4 / 12)),
  },
});
