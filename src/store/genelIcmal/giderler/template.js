export default {
  name: 'giderler',
  label: 'GİDERLER TOPLAMI',
  children: [
    {
      name: 'faaliyetGiderleri',
      label: 'Faaliyet Giderleri',
      children: [
        { name: 'malzemeGiderleri', label: 'Malzeme Giderleri' },
        {
          name: 'enerjiGiderleri',
          label: 'Enerji Giderleri',
          children: [
            {
              name: 'yakit',
              label: 'Yakıt (Motorin)',
              getters: '/enerjiGiderleri/{fieldName}/motorinGideri',
            },
            {
              name: 'elektrik',
              label: 'Elektrik Giderleri',
              getters: '/enerjiGiderleri/{fieldName}/elektrikGideri',
              /* getters: [{ name: 'yolcu', getter: '/enerjiGiderleri/yolcu/elektrikGideri' }] */
            },
          ],
        },
        {
          name: 'disariyaYaptirilanBakOn',
          label: 'Dışarıya Yaptırılan Bakım ve Onarım Giderleri',
          children: [
            {
              name: 'CekenCekilenArOn',
              label: 'Çeken Çekilen Araç Onarımları',
              children: [
                { name: 'bagliOrtaklik', label: 'Bağlı Ortaklık bakım onarım giderleri' },
                { name: 'dahili', label: 'Dahili Bakım ve Onarım giderleri' },
                {
                  name: 'disariyaYaptirilan',
                  label: 'Dışarıya Yaptırılan Bakım ve Onarım Giderleri',
                },
              ],
            },
            { name: 'diger', label: 'Diger' },
          ],
        },
        {
          name: 'hizmetAlimlari',
          label: 'Hizmet Alımları',
          children: [
            { name: 'giselerIcin', label: 'Gişeler için Hizmet Alımı Gid.' },
            { name: 'arac', label: 'Araç Hizmet Alımı Giderleri' },
            { name: 'temizlik', label: 'Temizlik Hizmet Alımı Giderleri' },
            { name: 'diger', label: 'Diğer Hizmet Alımları' },
          ],
        },
        {
          name: 'amortismanlar',
          label: 'Amortismanlar',
          children: [
            { name: 'cekenCekilenAraclar', label: 'Çeken ve çekilen araçlar amortismanı' },
            {
              name: 'tesislerMakinalarCihazlar',
              label: 'Tesisler, makinalar ve cihazlar amortismanı',
            },
            { name: 'diger', label: 'Diğer Amortismanlar' },
          ],
        },
        { name: 'disSaglananGazveSu', label: 'Dış. Sağlanan Gaz ve Su Gideri' },
        { name: 'digerleri', label: 'Diğerleri' },
      ],
    },
    {
      name: 'faaliyetDisiGiderler',
      label: 'Faaliyet Dışı Giderler',
      children: [
        { name: 'faizVeKomisyon', label: 'Faiz ve Komisyon' },
        { name: 'kabmiyo', label: 'Faiz ve Komisyon' },
        {
          name: 'digerler',
          label: 'Diğerleri',
          children: [
            { name: 'ODAitSozlPersEmeklilik', label: 'Ö.D. Ait Sözl. Pers. Emeklilik' },
            { name: 'ODAitKidemTazminatlari', label: 'Ö.D. Ait Kıdem Tazminatları' },
            { name: 'ODAitMemurEmeklilik', label: 'Ö.D. Ait Memur Emekli İkramiyeleri' },
            { name: 'diger', label: 'Diğer' },
          ],
        },
      ],
    },
  ],
};
