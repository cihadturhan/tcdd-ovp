export default (year) => ({  // eslint-disable-line
  namespaced: true,
  state() {
    return {
      idariTasima: 0,
      yurtici: {
        gelir: 0,
        digerGelirler: 0,
        netTonKm: 0,
        netTon: 0,
        trenKm: 0,
        hamtonKm: 0,
      },
      uluslararasi: {
        gelir: 0,
        digerGelirler: 0,
        netTonKm: 0,
        netTon: 0,
        trenKm: 0,
        hamtonKm: 0,
      },
    };
  },
  getters: {
    'yurtici/birimGelir': state => state.yurtici.gelir / state.yurtici.netTonKm,
    'yurtici/toplamGelir': state => state.yurtici.gelir + state.yurtici.digerGelirler,
    'yurtici/lojistik': state => state.yurtici.gelir + state.yurtici.digerGelirler,
    'uluslararasi/birimGelir': state => state.uluslararasi.gelir / state.uluslararasi.netTonKm,
    'uluslararasi/toplamGelir': state => state.uluslararasi.gelir + state.uluslararasi.digerGelirler,
    'uluslararasi/lojistik': state => state.uluslararasi.gelir + state.uluslararasi.digerGelirler,
    tasimaGeliri: state => state.yurtici.gelir + state.uluslararasi.gelir,
    toplamNetTonKm: state => state.yurtici.netTonKm + state.uluslararasi.netTonKm,
    ortalamaBirimGelir: (state, getters) => getters.tasimaGeliri / getters.toplamNetTonKm,
    toplamDigerGelirler: state => state.yurtici.digerGelirler + state.uluslararasi.digerGelirler,
    toplamGelir: (state, getters) => getters['yurtici/toplamGelir'] + getters['uluslararasi/toplamGelir'],
    toplamSatisNetTonKm: (state, getters) => getters.toplamNetTonKm + state.idariTasima,
  },
});

