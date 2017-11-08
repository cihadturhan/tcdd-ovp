const migrationsList = [
  {
    version: 'undefined',
    func(moduleName, loadedState) {
      return loadedState;
    },
  }, {
    version: '1.0',
    func(moduleName, loadedState) {
      if (moduleName === 'altyapiErisim') {
        const data = loadedState.trenHamtonKm.yolcu;
        delete loadedState.trenHamtonKm.yolcu;
        loadedState.trenHamtonKm.anahat = data;
      }
      return loadedState;
    },
  },
];

const generator = (oldVersionId, newVersionId) => {
  if (oldVersionId === newVersionId) {
    return (moduleName, loadedState) => loadedState;
  }
  const currentMigration = migrationsList.find(migration =>
    migration.version.toString() === newVersionId);
  return currentMigration.func;
};

export default generator;
