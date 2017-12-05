import yukGelirleri from '../store/yukGelirleri';
import faaliyetGelirleri from '../store/faaliyetGelirleri';
import varsayimlar from '../store/varsayimlar';
import personelGiderleri from '../store/personelGiderleri';
import enerjiGiderleri from '../store/enerjiGiderleri';
import altyapiErisim from '../store/altyapiErisim';
import genelIcmal from '../store/genelIcmal/index';
import migrations from './migrations';


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
  const migration = migrations(jsonContent.version, store.state.version);
  for (let year = jsonContent.minYear; year <= jsonContent.maxYear; year += 1) {
    if (year in store.state) {
      store.unregisterModule([String(year)]);
    }

    store.registerModule([String(year)], { namespaced: true });
    Object.entries(moduleGenerators).forEach(([moduleName, moduleGenerator]) => {
      // generate module with default parameters
      const generatedModule = moduleGenerator(year);
      // find module from the json recieved by server
      const loadedState = jsonContent[year][moduleName];
      // perform migration
      const migratedLoadedState = migration(moduleName, loadedState, generatedModule);
      // assign new data
      generatedModule.state = () => migratedLoadedState;
      store.registerModule([String(year), moduleName], generatedModule);
    });
  }
};
