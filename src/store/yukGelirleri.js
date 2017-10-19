export default (year) => ({  // eslint-disable-line
  namespaced: true,
  state() {
    return {
      idariTasima: 63000000,
      yurtici: {
        gelir: 576945000,
        digerGelirler: 49811000,
        netTonKm: 11783000000,
        netTon: 24850000000,
        trenKm: 203000000,
        hamtonKm: 19600000,
      },
      uluslararasi: {
        gelir: 53244000,
        digerGelirler: 25000000,
        netTonKm: 504000000,
        netTon: 504000000,
        trenKm: 0,
        hamtonKm: 20300,
      },
    };
  },
  getters: {
    'yurtici/birimGelir': state => state.yurtici.gelir / state.yurtici.netTonKm,
    'yurtici/toplamGelir': state => state.yurtici.gelir + state.yurtici.digerGelirler,
    'uluslararasi/birimGelir': state => state.uluslararasi.gelir / state.uluslararasi.netTonKm,
    'uluslararasi/toplamGelir': state => state.uluslararasi.gelir + state.uluslararasi.digerGelirler,
    tasimaGeliri: state => state.yurtici.gelir + state.uluslararasi.gelir,
    toplamNetTonKm: state => state.yurtici.netTonKm + state.uluslararasi.netTonKm,
    ortalamaBirimGelir: (state, getters) => getters.tasimaGeliri / getters.toplamNetTonKm,
    toplamDigerGelirler: state => state.yurtici.digerGelirler + state.uluslararasi.digerGelirler,
    toplamGelir: (state, getters) => getters['yurtici/toplamGelir'] + getters['uluslararasi/toplamGelir'],
    toplamSatisNetTonKm: (state, getters) => getters.toplamNetTonKm + state.idariTasima,
  },
});

