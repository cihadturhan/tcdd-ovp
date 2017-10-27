import giderlerGenerator from './giderler/';


export default (year) => {
  const giderler = giderlerGenerator(year);


  return {
    namespaced: true,
    state() {
      return {
        ...giderler.state,
      };
    },
    getters: {
      ...giderler.getters,
    },
  };
};
