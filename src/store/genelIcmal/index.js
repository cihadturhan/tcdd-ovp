import { generateGetters } from './util';

import faaliyetDisiGelirler from './faaliyetDisiGelirler';
import kamuHizmetYukumlulugu from './kamuHizmetYukumlulugu';

const state = {
  faaliyetDisiGelirler,
  kamuHizmetYukumlulugu,
};

const getters = generateGetters(state);

export default {
  namespaced: true,
  state() {
    return state;
  },
  getters: {
    ...getters,
  },
};
