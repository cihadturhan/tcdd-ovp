const faaliyetBilgileri = {
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
  diger: {
    yurtici: {
      gelir: 0,
      yolcuSayisi: 0,
      yolcuKm: 0,
    },
  },
  anahat: {
    konvansiyonel: {
      yurtici: {
        gelir: 0,
        yolcuSayisi: 0,
        yolcuKm: 0,
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
        gelir: 0,
        yolcuSayisi: 0,
        yolcuKm: 0,
      },
      ankaraIstanbul: {
        gelir: 0,
        yolcuSayisi: 0,
        yolcuKm: 0,
      },
      konyaIstanbul: {
        gelir: 0,
        yolcuSayisi: 0,
        yolcuKm: 0,
      },
    },
  },
};

const toplamYolcu = item => Object.values(item).reduce((prev, curr) => prev + curr.yolcuSayisi, 0);
const toplamGelir = item => Object.values(item).reduce((prev, curr) => prev + curr.gelir, 0);
const toplamYolcuKm = item => Object.values(item).reduce((prev, curr) => prev + curr.yolcuKm, 0);
const birimGelir = item => (item.yolcuKm === 0 ? 0 : item.gelir / item.yolcuKm);

function traverse([key, value], aggregate) {
  const entries = Object.entries(value);
  const newAggregate = [...aggregate, key];
  if (entries[0] && typeof entries[0][1] === 'object') {
    return entries.reduce((prev, entry) => [...prev, ...traverse(entry, newAggregate)], []);
  }

  return [{ scope: newAggregate }];
}

const scopes = Object.entries(faaliyetBilgileri)
  .reduce((prev, entry) => [...prev, ...traverse(entry, [])], []);

const birimGelirler = scopes
  .reduce((prev, { scope }) => {
    prev[`${scope.join('/')}/birimGelir`] = (state) => {
      const item = scope.reduce((p, c) => p[c], state);
      return birimGelir(item);
    };

    return prev;
  }, {});

export default (year) => ({ // eslint-disable-line
  namespaced: true,
  state() {
    return { ...faaliyetBilgileri };
  },
  getters: {
    ...birimGelirler,
    'banliyo/toplamYolcu': ({ banliyo }) => toplamYolcu(banliyo),
    'banliyo/toplamGelir': ({ banliyo }) => toplamGelir(banliyo),
    'banliyo/toplamYolcuKm': ({ banliyo }) => toplamYolcuKm(banliyo),
    'banliyo/birimGelir': (state, getters) => birimGelir({
      gelir: getters['banliyo/toplamGelir'],
      yolcuKm: getters['banliyo/toplamYolcuKm'],
    }),

    'anahat/konvansiyonel/toplamGelir': ({ anahat: { konvansiyonel } }) => toplamGelir(konvansiyonel),
    'anahat/konvansiyonel/toplamYolcu': ({ anahat: { konvansiyonel } }) => toplamYolcu(konvansiyonel),
    'anahat/konvansiyonel/toplamYolcuKm': ({ anahat: { konvansiyonel } }) => toplamYolcuKm(konvansiyonel),
    'anahat/konvansiyonel/birimGelir': (state, getters) => birimGelir({
      gelir: getters['anahat/konvansiyonel/toplamGelir'],
      yolcuKm: getters['anahat/konvansiyonel/toplamYolcuKm'],
    }),

    'anahat/yht/toplamGelir': ({ anahat: { yht } }) => toplamGelir(yht),
    'anahat/yht/toplamYolcu': ({ anahat: { yht } }) => toplamYolcu(yht),
    'anahat/yht/toplamYolcuKm': ({ anahat: { yht } }) => toplamYolcuKm(yht),
    'anahat/yht/birimGelir': (state, getters) => birimGelir({
      gelir: getters['anahat/yht/toplamGelir'],
      yolcuKm: getters['anahat/yht/toplamYolcuKm'],
    }),

    'anahat/toplamYolcu': (state, getters) => getters['anahat/konvansiyonel/toplamYolcu'] + getters['anahat/yht/toplamYolcu'],
    'anahat/toplamGelir': (state, getters) => getters['anahat/konvansiyonel/toplamGelir'] + getters['anahat/yht/toplamGelir'],
    'anahat/toplamYolcuKm': (state, getters) => getters['anahat/konvansiyonel/toplamYolcuKm'] + getters['anahat/yht/toplamYolcuKm'],
    'anahat/birimGelir': (state, getters) => birimGelir({
      gelir: getters['anahat/toplamGelir'],
      yolcuKm: getters['anahat/toplamYolcuKm'],
    }),

    toplamYolcu: (state, getters) => getters['banliyo/toplamYolcu'] + getters['anahat/toplamYolcu'],
    toplamGelir: (state, getters) => getters['banliyo/toplamGelir'] + getters['anahat/toplamGelir'],
    toplamYolcuKm: (state, getters) => getters['banliyo/toplamYolcuKm'] + getters['anahat/toplamYolcuKm'],
    birimGelir: (state, getters) => birimGelir({
      gelir: getters.toplamGelir,
      yolcuKm: getters.toplamYolcuKm,
    }),

    'uluslararasi/yolcu': state => state.anahat.konvansiyonel.uluslararasi.gelir,
    'banliyo/marmaray': state => state.banliyo.marmaray.gelir,
    'banliyo/ankara': state => state.banliyo.ankara.gelir,
    'diger/yolcu': state => state.diger.yurtici.gelir,
    anahat: state => state.anahat.konvansiyonel.yurtici.gelir - state.diger.yurtici.gelir,
  },
});

