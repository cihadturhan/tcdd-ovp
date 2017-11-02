import yukGelirleri from '../store/yukGelirleri';
import faaliyetGelirleri from '../store/faaliyetGelirleri';
import varsayimlar from '../store/varsayimlar';
import personelGiderleri from '../store/personelGiderleri';
import enerjiGiderleri from '../store/enerjiGiderleri';
import altyapiErisim from '../store/altyapiErisim';
import genelIcmal from '../store/genelIcmal/index';


const moduleGenerators = {
  yukGelirleri,
  faaliyetGelirleri,
  varsayimlar,
  personelGiderleri,
  enerjiGiderleri,
  altyapiErisim,
  genelIcmal,
};

export const deepClone = obj => JSON.parse(JSON.stringify(obj));
export const addNewYear = (store, year) => {
  // register a nested module `nested/myModule`
  store.registerModule([String(year)], { namespaced: true });
  Object.entries(moduleGenerators).forEach(([moduleName, moduleGenerator]) => {
    const generatedModule = moduleGenerator(year);
    store.registerModule([String(year), moduleName], generatedModule);
  });

  store.commit('addYear', { year });
};

export const removeYear = (store, year) => {
  if (year === store.state.minYear) {
    store.state.minYear = year + 1;
    if (year === store.state.currentYear) {
      store.state.currentYear = year + 1;
    }
  }

  if (year === store.state.maxYear) {
    store.state.maxYear = year - 1;
    if (year === store.state.currentYear) {
      store.state.currentYear = year - 1;
    }
  }

  if (year in store.state) {
    store.unregisterModule([String(year)]);
  }
};

export const loadYears = (store, jsonContent) => {
  for (let year = jsonContent.minYear; year <= jsonContent.maxYear; year += 1) {
    if (year in store.state) {
      store.unregisterModule([String(year)]);
    }

    store.registerModule([String(year)], { namespaced: true });
    Object.entries(moduleGenerators).forEach(([moduleName, moduleGenerator]) => {
      const generatedModule = moduleGenerator(year);
      const loadedState = jsonContent[year][moduleName];

      /*
      if (moduleName === 'genelIcmal') {
        const data = loadedState[''].gelirler.kamuHizmetYukumlulugu;
        delete loadedState[''].gelirler.kamuHizmetYukumlulugu;
        loadedState[''].gelirler.faaliyetGelirleri = loadedState[''].gelirler.faaliyetGiderleri;
        delete loadedState[''].gelirler.faaliyetGiderleri;
        loadedState[''].gelirler.faaliyetGelirleri.kamuHizmetYukumlulugu = data;
      }
      */

      generatedModule.state = () => loadedState;
      store.registerModule([String(year), moduleName], generatedModule);
    });
  }
};
