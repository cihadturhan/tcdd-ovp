export default {
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
      },
      memurMaasi: {
        iDonem: 5.0,
        iiDonem: 5.0,
        ortalama: 0,
      },
      kamuIscisiUcreti: {
        iDonem: 5.0,
        iiDonem: 5.0,
        ortalama: 0,
      },
    };
  },
};
