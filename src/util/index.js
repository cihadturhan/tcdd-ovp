import yukGelirleri from '../store/yukGelirleri';
import faaliyetGelirleri from '../store/faaliyetGelirleri';
import varsayimlar from '../store/varsayimlar';
import personelGiderleri from '../store/personelGiderleri';
import enerjiGiderleri from '../store/enerjiGiderleri';


const modules = {
  yukGelirleri,
  faaliyetGelirleri,
  varsayimlar,
  personelGiderleri,
  enerjiGiderleri,
};


export const beforeLastScope = (obj, scope) =>
  scope.slice(0, scope.length - 1).reduce((p, c) => p[c], obj);
export const lastScope = (obj, scope) => scope.slice(0, scope.length).reduce((p, c) => p[c], obj);
export const lastItem = arr => arr[arr.length - 1];
export const addNewYear = (store, year) => {
  // register a nested module `nested/myModule`
  store.registerModule([String(year)], { namespaced: true });
  Object.entries(modules).forEach(([moduleName, module]) => {
    store.registerModule([String(year), moduleName], module);
  });
};
