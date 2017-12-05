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
  }, {
    version: '1.1',
    func(moduleName, loadedState, defaultModule) {
      if (moduleName === 'genelIcmal') {
        const defaultRoot = defaultModule.state()[''];
        const { gelirler, giderler } = loadedState[''];

        const { banliyo, marmaray } = defaultRoot.gelirler.faaliyetGelirleri.kamuHizmetYukumlulugu;
        const kmh = gelirler.faaliyetGelirleri.kamuHizmetYukumlulugu;
        gelirler.faaliyetGelirleri.kamuHizmetYukumlulugu = { ...kmh, banliyo, marmaray };

        giderler.faaliyetGiderleri.malzemeGiderleri =
          defaultRoot.giderler.faaliyetGiderleri.malzemeGiderleri;

        const { binalar, tesisler, doseme } =
          defaultRoot.giderler.faaliyetGiderleri.disariyaYaptirilanBakOn;
        const { disariyaYaptirilanBakOn } = giderler.faaliyetGiderleri;
        giderler.faaliyetGiderleri.disariyaYaptirilanBakOn =
          { ...disariyaYaptirilanBakOn, binalar, tesisler, doseme };
        delete disariyaYaptirilanBakOn.CekenCekilenArOn.disariyaYaptirilan;

        const { koruma, otel, hostes, cagri, kidemTazminati, etut } =
          defaultRoot.giderler.faaliyetGiderleri.hizmetAlimlari;
        const { hizmetAlimlari } = giderler.faaliyetGiderleri;
        giderler.faaliyetGiderleri.hizmetAlimlari =
          { ...hizmetAlimlari, koruma, otel, hostes, cagri, kidemTazminati, etut };

        const { tesisKullanim, yardimciHizmetler, ekHizmetler, tazminat, vangolu, tekirdag } =
          defaultRoot.giderler.faaliyetGiderleri.danismanlik;
        const { altyapiErisim } = giderler.faaliyetGiderleri;
        delete giderler.faaliyetGiderleri.altyapiErisim;
        giderler.faaliyetGiderleri.danismanlik = {
          altyapiErisim,
          tesisKullanim,
          yardimciHizmetler,
          ekHizmetler,
          tazminat,
          vangolu,
          tekirdag,
        };

        const { kira, mahkemeNoter, egitimKultur, vergiSigorta, haberlesme, reklam, sosyal } =
          defaultRoot.giderler.faaliyetGiderleri;

        giderler.faaliyetGiderleri = {
          ...giderler.faaliyetGiderleri,
          kira,
          mahkemeNoter,
          egitimKultur,
          vergiSigorta,
          haberlesme,
          reklam,
          sosyal,
        };
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
