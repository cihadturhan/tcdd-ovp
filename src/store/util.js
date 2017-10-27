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
    if (year > store.state.minYear) {
      const previousYearState = deepClone(store.state[year - 1][moduleName]);
      generatedModule.state = () => previousYearState;
    }
    store.registerModule([String(year), moduleName], generatedModule);
  });
};
