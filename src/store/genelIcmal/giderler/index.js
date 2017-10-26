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

    if (expense.children && expense.children.length) {
      childrenGetters = expense.children.reduce((prev, curr) => ({
        ...prev,
        ...generateGetters(curr, `${scope}/${expense.name}`),
      }), {});
    } else {
      switch (TypeOf(expense.getters)) {
        case 'string':
          childrenGetters = rows.reduce((prev, row) => ({
            ...prev,
            [`${scope}/${expense.name}/${row.key}`]:
                    (s, g, gs, globalGetters) => globalGetters[year + expense.getters.replace('{fieldName}', row.key)],
          }), {});
          break;
        case 'array':
          childrenGetters = expense.getters.reduce((prev, getterObj) => ({
            ...prev,
            [`${scope}/${expense.name}/${getterObj.name}`]:
                    (s, g, gs, globalGetters) => globalGetters[year + getterObj.getter],
          }), {});
          break;
        default:
          childrenGetters = {};
      }
    }

    return childrenGetters;
  };

  const state = generateStates(expenses);
  const getters = generateGetters(expenses);
  return { state, getters };
};
