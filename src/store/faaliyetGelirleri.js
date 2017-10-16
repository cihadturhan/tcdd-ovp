export default {
  namespaced: true,
  state() {
    return {
      banliyo: {
        marmaray: {
          gelir: 0,
          yolcuSayisi: 0,
          yolcuKm: 0,
        },
        ankara: {
          gelir: 0,
          yolcuSayisi: 0,
          yolcuKm: 0,
        },
      },
      anahat: {
        konvansiyonel: {
          yurtici: {
            gelir: 1000,
            yolcuSayisi: 90,
            yolcuKm: 70,
          },
          uluslararasi: {
            gelir: 0,
            yolcuSayisi: 0,
            yolcuKm: 0,
          },
        },
        yht: {
          ankaraEskisehir: {
            gelir: 0,
            yolcuSayisi: 0,
            yolcuKm: 0,
          },
          konyaAnkara: {
            gelir: 10,
            yolcuSayisi: 0,
            yolcuKm: 12,
          },
          ankaraIstanbul: {
            gelir: 0,
            yolcuSayisi: 0,
            yolcuKm: 0,
          },
          konyaIstanbul: {
            gelir: 10,
            yolcuSayisi: 20,
            yolcuKm: 0,
          },
        },
      },
    };
  },
};

