export const generateGetterFor = (entry, stateName) => {
  const getter = Object.keys(entry).reduce((p, key) => {
    p[`${stateName}/${key}/toplamGelir`] = (state) => {
      const item = state[stateName][key];
      return Object.values(item).reduce((prev, field) => prev + field, 0);
    };
    return p;
  }, {});

  getter[`${stateName}/toplamGelir`] = (state, getters) => Object
    .keys(state[stateName])
    .reduce((prev, key) => prev + getters[`${stateName}/${key}/toplamGelir`], 0);

  return getter;
};

export const generateGetters = state => Object
  .entries(state)
  .reduce((prev, [stateName, entry]) => {
    const current = generateGetterFor(entry, stateName);
    return { ...prev, ...current };
  }, {});
