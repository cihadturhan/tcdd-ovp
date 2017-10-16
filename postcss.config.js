// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { autoprefixer: true, browsers: ['last 2 versions', '> 1%'] },
    'postcss-nested': {},
  },
};
