export const beforeLastScope = (obj, scope) =>
  scope.slice(0, scope.length - 1).reduce((p, c) => p[c], obj);
export const lastScope = (obj, scope) => scope.slice(0, scope.length).reduce((p, c) => p[c], obj);
export const lastItem = arr => arr[arr.length - 1];
