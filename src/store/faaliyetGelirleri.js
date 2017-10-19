const faaliyetBilgileri = {
  banliyo: {
    marmaray: {
      gelir: 86000000,
      yolcuSayisi: 68000000,
      yolcuKm: 952000000,
    },
    ankara: {
      gelir: 120000,
      yolcuSayisi: 60000,
      yolcuKm: 2000000,
    },
  },
  anahat: {
    konvansiyonel: {
      yurtici: {
        gelir: 81593000,
        yolcuSayisi: 15675000,
        yolcuKm: 1555000000,
      },
      uluslararasi: {
        gelir: 1152000,
        yolcuSayisi: 120000,
        yolcuKm: 40000000,
      },
    },
    yht: {
      ankaraEskisehir: {
        gelir: 24860000,
        yolcuSayisi: 1365144,
        yolcuKm: 315304000,
      },
      konyaAnkara: {
        gelir: 39076000,
        yolcuSayisi: 2040068,
        yolcuKm: 597839000,
      },
      ankaraIstanbul: {
        gelir: 93282000,
        yolcuSayisi: 2780917,
        yolcuKm: 922901000,
      },
      konyaIstanbul: {
        gelir: 35182000,
        yolcuSayisi: 862871,
        yolcuKm: 365916000,
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
  },
});

