import { rows } from '@/util/config';


const TypeOf = (obj) => {
  if (typeof obj === 'undefined') {
    return 'undefined';
  } else if (obj.constructor === Array) {
    return 'array';
  } else if (obj.constructor === String) {
    return 'string';
  } else if (obj.constructor === Number) {
    return 'number';
  } else if (obj.constructor === Boolean) {
    return 'boolean';
  }

  return 'object';
};


const expenses = {
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


  const states = generateStates(expenses);
  const getters = generateGetters(expenses);
};

