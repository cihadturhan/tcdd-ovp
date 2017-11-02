export default {
  name: '',
  label: 'GENEL ICMAL',
  virtualNode: true,
  children: [
    {
      name: 'gelirler',
      label: 'GELİRLER TOPLAMI',
      order: 'last',
      children: [
        {
          name: 'faaliyetGelirleri',
          label: 'Faaliyet Gelirleri',
          children: [
            {
              name: 'yolcuGelirleri',
              label: 'Yolcu Gelirleri',
              children: [
                {
                  name: 'yurtici',
                  label: 'Yurtiçi Yolcu Gelirleri',
                  children: [
                    {
                      name: 'banliyo',
                      label: 'Banliyo',
                      getters: '/faaliyetGelirleri/banliyo/ankara',
                      except: ['lojistik', 'yht', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                    },
                    {
                      name: 'marmaray',
                      label: 'Marmaray',
                      getters: '/faaliyetGelirleri/banliyo/marmaray',
                      except: ['yolcu', 'lojistik', 'yht', 'aracBakim', 'adf', 'genelYonetim'],
                    },
                    {
                      name: 'anahat',
                      label: 'Anahat',
                      getters: '/faaliyetGelirleri/anahat',
                      except: ['lojistik', 'yht', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                    },
                    {
                      name: 'yht',
                      label: 'YHT',
                      getters: '/faaliyetGelirleri/anahat/yht/toplamGelir',
                      except: ['yolcu', 'lojistik', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                    },
                    {
                      name: 'diger',
                      label: 'Diğer yolcu gelirleri',
                      getters: '/faaliyetGelirleri/diger/yolcu',
                      except: ['lojistik', 'yht', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                    },
                  ],
                },
                {
                  name: 'yurtdisi',
                  label: 'Yurtdışı Yolcu Gelirleri',
                  getters: '/faaliyetGelirleri/uluslararasi/{fieldName}',
                  except: ['lojistik', 'yht', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                },
              ],
            },
            {
              name: 'yukGelirleri',
              label: 'Yük Gelirleri',
              children: [
                {
                  name: 'yurtici',
                  label: 'Yurtiçi Yük Gelirleri',
                  getters: '/yukGelirleri/yurtici/{fieldName}',
                  except: ['yolcu', 'yht', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                },
                {
                  name: 'yurtdisi',
                  label: 'Yurtdışı Yük Gelirleri',
                  getters: '/yukGelirleri/uluslararasi/{fieldName}',
                  except: ['yolcu', 'yht', 'marmaray', 'aracBakim', 'adf', 'genelYonetim'],
                },
              ],
            },
            {
              name: 'kamuHizmetYukumlulugu',
              label: 'Kamu Hizmet Yükümlülüğü',
              children: [
                { name: 'bolgesel', label: 'Bölgesel' },
                { name: 'anahat', label: 'Anahat' },
                { name: 'yht', label: 'YHT' },
              ],
            },
          ],
        },
        {
          name: 'faaliyetDisiGelirler',
          label: 'Faaliyet Dışı Gelirler',
          children: [
            { name: 'hurdaSatisi', label: 'Hurda Satışı' },
            { name: 'digerSatislar', label: 'Diğer satışlar' },
            { name: 'digerGelirler', label: 'Diğer Gelirler' },
          ],
        }],
    },
    {
      name: 'giderler',
      label: 'GİDERLER TOPLAMI',
      order: 'last',
      children: [
        {
          name: 'faaliyetGiderleri',
          label: 'Faaliyet Giderleri',
          children: [
            {
              name: 'personelGiderleri',
              label: 'Personel Giderleri',
              children: [
                {
                  name: 'memur',
                  label: 'Memur Personel',
                  getters: '/personelGiderleri/{fieldName}/memur/personelGideri',
                },
                {
                  name: 'sozlesmeli',
                  label: 'Sözleşmeli',
                  getters: '/personelGiderleri/{fieldName}/sozlesmeli/personelGideri',
                },
                {
                  name: 'daimi',
                  label: 'Daimi İşçi',
                  getters: '/personelGiderleri/{fieldName}/daimi/personelGideri',
                },
                {
                  name: 'gecici',
                  label: 'Geçici İşçi',
                  getters: '/personelGiderleri/{fieldName}/gecici/personelGideri',
                },
              ],
            },
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
                  /* getters: [{ name: 'yolcu', getter:
                   '/enerjiGiderleri/yolcu/elektrikGideri' }] */
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
            {
              name: 'altyapiErisim',
              label: ' TCDD Altyapı Erişim ücreti',
              getters: '/altyapiErisim/{fieldName}/gider',
              except: ['aracBakim', 'adf', 'genelYonetim'],
            },
          ],
        },
        {
          name: 'faaliyetDisiGiderler',
          label: 'Faaliyet Dışı Giderler',
          children: [
            { name: 'faizVeKomisyon', label: 'Faiz ve Komisyon' },
            { name: 'kabmiyo', label: 'Kambiyo' },
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
    }],
  reducers: [
    {
      name: 'donemKarZarar',
      label: 'DÖNEM KAR/ZARAR',
      reduceFunc: (state, getters, field) => getters[`/gelirler/${field.key}/toplam`]
        - getters[`/giderler/${field.key}/toplam`],
    },
    {
      name: 'faaliyetKarZarar',
      label: ' Faaliyet Kar/Zararı',
      reduceFunc: (state, getters, field) => getters[`/gelirler/faaliyetGelirleri/${field.key}/toplam`]
        - getters[`/giderler/faaliyetGiderleri/${field.key}/toplam`],
    },
    {
      name: 'faaliyetDisiKarZarar',
      label: 'Faaliyet Dışı Kar/Zarar',
      reduceFunc: (state, getters, field) => getters[`/gelirler/faaliyetDisiGelirler/${field.key}/toplam`]
        - getters[`/giderler/faaliyetDisiGiderler/${field.key}/toplam`],
    },
    {
      name: 'faaliyetKarsilamaOrani',
      label: 'Faaliyet Gelirinin Gideri Karşılama Oranı (%)',
      type: 'ratio',
      reduceFunc: (state, getters, field) => (getters[`/gelirler/faaliyetGelirleri/${field.key}/toplam`] / getters[`/giderler/faaliyetGiderleri/${field.key}/toplam`]) * 100,
    },
    {
      name: 'toplamKarsilamaOrani',
      label: 'Toplam Gelirin Toplam Gideri Karşılama Oranı (%)',
      type: 'ratio',
      reduceFunc: (state, getters, field) => (getters[`/gelirler/${field.key}/toplam`] / getters[`/giderler/${field.key}/toplam`]) * 100,
    },
    {
      name: 'ebitda',
      label: 'EBİTDA',
      reduceFunc: (state, getters, field) => getters[`/faaliyetKarZarar/${field.key}`]
        - getters[`/giderler/faaliyetGiderleri/amortismanlar/${field.key}/toplam`],
    },
  ],
};
