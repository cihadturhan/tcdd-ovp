import { rows, smRows, tRows, gtRows, fullRows } from '@/util/config';
import { TypeOf } from '../util';
import expenses from './template';

export default (year) => {
  const generateStates = (expense) => {
    let childrenState;

    if (expense.children && expense.children.length) {
      childrenState = expense.children.reduce((prev, curr) => ({
        ...prev,
        ...generateStates(curr, expense.name),
      }), {});
    } else if (TypeOf(expense.getters) === 'array') {
      const getterKeys = expense.getters.map(getterObj => getterObj.name);
      childrenState = rows
        .filter(row => getterKeys.indexOf(row.key) === -1)
        .reduce((prev, row) => ({ ...prev, [row.key]: 0 }), {});
    } else {
      childrenState = rows.reduce((prev, row) => ({ ...prev, [row.key]: 0 }), {});
    }

    return {
      [expense.name]: childrenState,
    };
  };


  const generateGetters = (expense, scope = []) => {
    let childrenGetters;
    const strScope = `${scope.join('/')}${scope.length ? '/' : ''}`;

    if (expense.children && expense.children.length) {
      childrenGetters = expense.children.reduce((prev, curr) => ({
        ...prev,
        ...generateGetters(curr, [...scope, expense.name]),
      }), {});
    } else {
      switch (TypeOf(expense.getters)) {
        case 'string':
          childrenGetters = rows.reduce((prev, row) => ({
            ...prev,
            [`${strScope}${expense.name}/${row.key}`]:
              (s, g, gs, globalGetters) => {
                if (expense.except && expense.except.indexOf(row.key) > -1) {
                  return 0;
                }
                return globalGetters[year + expense.getters.replace('{fieldName}', row.key)];
              },
          }), {});
          childrenGetters[`${strScope}${expense.name}/satislarinMaaliyeti`] = (s, getters) =>
            smRows.reduce((prev, row) =>
              prev + getters[`${strScope}${expense.name}/${row.key}`], 0);
          childrenGetters[`${strScope}${expense.name}/tcddTasimacilik`] = (s, getters) =>
            tRows.reduce((prev, row) =>
              prev + getters[`${strScope}${expense.name}/${row.key}`], 0);
          childrenGetters[`${strScope}${expense.name}/genelToplam`] = (s, getters) =>
            gtRows.reduce((prev, row) =>
              prev + getters[`${strScope}${expense.name}/${row.key}`], 0);
          break;
        case 'array':
          childrenGetters = expense.getters.reduce((prev, getterObj) => ({
            ...prev,
            [`${strScope}${expense.name}/${getterObj.name}`]:
              (s, g, gs, globalGetters) => {
                /* eslint-disable no-console */
                if (typeof globalGetters[year + getterObj.getter] === 'undefined') {
                  console.error(year + getterObj.getter, 'is undefined');
                }
                return globalGetters[year + getterObj.getter];
              },
          }), {});
          childrenGetters[`${strScope}${expense.name}/satislarinMaaliyeti`] = (state, getters) =>
            smRows.reduce((prev, row) => {
              if (expense.getters.find(getter => row.key === getter.name)) {
                return prev + getters[`${strScope}${expense.name}/${row.key}`];
              }
              return prev + [...scope, expense.name, row.key].reduce((p, c) => p[c], state);
            }, 0);

          childrenGetters[`${strScope}${expense.name}/tcddTasimacilik`] = (state, getters) =>
            tRows.reduce((prev, row) => {
              if (expense.getters.find(getter => row.key === getter.name)) {
                return prev + getters[`${strScope}${expense.name}/${row.key}`];
              }
              return prev + [...scope, expense.name, row.key].reduce((p, c) => p[c], state);
            }, 0);

          childrenGetters[`${strScope}${expense.name}/genelToplam`] = (state, getters) =>
            gtRows.reduce((prev, row) => {
              if (expense.getters.find(getter => row.key === getter.name)) {
                return prev + getters[`${strScope}${expense.name}/${row.key}`];
              }
              return prev + [...scope, expense.name, row.key].reduce((p, c) => p[c], state);
            }, 0);

          break;
        case 'undefined':
          childrenGetters = {};

          childrenGetters[`${strScope}${expense.name}/satislarinMaaliyeti`] = state =>
            smRows.reduce((prev, row) => prev +
              [...scope, expense.name, row.key].reduce((p, c) => p[c], state), 0);

          childrenGetters[`${strScope}${expense.name}/tcddTasimacilik`] = state =>
            tRows.reduce((prev, row) => prev +
              [...scope, expense.name, row.key].reduce((p, c) => p[c], state), 0);

          childrenGetters[`${strScope}${expense.name}/genelToplam`] = state =>
            gtRows.reduce((prev, row) => prev +
              [...scope, expense.name, row.key].reduce((p, c) => p[c], state), 0);
          break;
        default:
          childrenGetters = {};
      }
    }

    if (expense.reducers && expense.reducers.length) {
      const reducers = expense.reducers.reduce((prev, reducer) => {
        const rowReducers = fullRows.reduce((rowPrev, row) => ({
          ...rowPrev,
          [`${strScope}${expense.name}/${reducer.name}/${row.key}`]:
            (store, getters) => {
              if (reducer.except && reducer.except.indexOf(row.key) > -1) {
                return 0;
              }
              return reducer.reduceFunc(store, getters, row);
            },
        }), {});
        return { ...prev, ...rowReducers };
      }, {});

      childrenGetters = { ...childrenGetters, ...reducers };
    }

    return childrenGetters;
  };

  const generateHorizontalGetters = (expense, scope = []) => {
    let horizontalGetters = {};
    const strScope = `${scope.join('/')}${scope.length ? '/' : ''}`;

    if (expense.children && expense.children.length) {
      const parentHorizontalGetters = fullRows.reduce((prev, row) => ({
        ...prev,
        [`${strScope}${expense.name}/${row.key}/toplam`]:
          (state, getters) => {
            const children = expense.children;
            return children.reduce((pprev, child) => {
              if (child.children && child.children.length) {
                return pprev + getters[`${strScope}${expense.name}/${child.name}/${row.key}/toplam`];
              } else if (child.getters || row.key === 'satislarinMaaliyeti' || row.key === 'genelToplam' || row.key === 'tcddTasimacilik') {
                const currentScopeStr = [...scope, expense.name, child.name, row.key].join('/');
                return pprev + getters[currentScopeStr];
              }

              const currentScope = [...scope, expense.name, child.name, row.key];
              return pprev + currentScope.reduce((p, c) => p[c], state);
            }, 0);
          },
      }), {});
      horizontalGetters = {
        ...parentHorizontalGetters,
        ...expense.children.reduce((prev, curr) => ({
          ...prev,
          ...generateHorizontalGetters(curr, [...scope, expense.name]),
        }), {}),
      };
    }

    return horizontalGetters;
  };


  return {
    state: generateStates(expenses),
    getters: { ...generateGetters(expenses), ...generateHorizontalGetters(expenses) },
  };
};
