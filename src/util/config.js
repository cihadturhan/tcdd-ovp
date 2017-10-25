export const host = process.env.NODE_ENV === 'development' ? 'http://tcdd.fdnsoft.com' : '';
export const env = process.env.NODE_ENV;

export const rows = [
  { key: 'yolcu', title: 'Yolcu' },
  { key: 'lojistik', title: 'Lojistik' },
  { key: 'yht', title: 'YHT' },
  { key: 'marmaray', title: 'Marmaray' },
  { key: 'adf', title: 'ADF' },
  { key: 'genelYonetim', title: 'Genel Yönetim' },
];
