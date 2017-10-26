import { rows } from '@/util/config';
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


  const generateGetters = (expense, scope = '') => {
    let childrenGetters;
    const strScope = `${scope}${scope.length ? '/' : ''}`;

    if (expense.children && expense.children.length) {
      childrenGetters = expense.children.reduce((prev, curr) => ({
        ...prev,
        ...generateGetters(curr, `${strScope}${expense.name}`),
      }), {});
    } else {
      switch (TypeOf(expense.getters)) {
        case 'string':
          childrenGetters = rows.reduce((prev, row) => ({
            ...prev,
            [`${strScope}${expense.name}/${row.key}`]:
              (s, g, gs, globalGetters) => globalGetters[year + expense.getters.replace('{fieldName}', row.key)],
          }), {});
          break;
        case 'array':
          childrenGetters = expense.getters.reduce((prev, getterObj) => ({
            ...prev,
            [`${strScope}${expense.name}/${getterObj.name}`]:
              (s, g, gs, globalGetters) => globalGetters[year + getterObj.getter],
          }), {});
          break;
        default:
          childrenGetters = {};
      }
    }

    return childrenGetters;
  };

  const generateHorizontalGetters = (expense, scope = []) => {
    let horizontalGetter = {};
    const strScope = `${scope.join('/')}${scope.length ? '/' : ''}`;

    if (expense.children && expense.children.length) {
      const parentHorizontalGetters = rows.reduce((prev, row) => ({
        ...prev,
        [`${strScope}${expense.name}/${row.key}/toplam`]:
          (state, getters) => {
            const children = expense.children;
            return children.reduce((pprev, child) => {
              if (child.children && child.children.length) {
                return pprev + getters[`${strScope}${expense.name}/${child.name}/${row.key}/toplam`];
              } else if (child.getters) {
                const currentScopeStr = [...scope, expense.name, child.name, row.key].join('/');
                return pprev + getters[currentScopeStr];
              }

              const currentScope = [...scope, expense.name, child.name, row.key];
              return pprev + currentScope.reduce((p, c) => p[c], state);
            }, 0);
          },
      }), {});
      horizontalGetter = {
        ...parentHorizontalGetters,
        ...expense.children.reduce((prev, curr) => ({
          ...prev,
          ...generateHorizontalGetters(curr, [...scope, expense.name]),
        }), {}),
      };
    }

    return horizontalGetter;
  };
  return {
    state: generateStates(expenses),
    getters: { ...generateGetters(expenses), ...generateHorizontalGetters(expenses) },
  };
};
