module.exports = ctx => ({
  map: ctx.env === 'development' ? ctx.map : false,
  parser: ctx.file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-easy-import': {
      extensions: ['.sss']
    },
    'postcss-nesting': {},
    'postcss-css-variables': {},
    'css-mqpacker': {},
    'postcss-custom-media': {},
    'postcss-responsive-type': {},
    autoprefixer: {},
    cssnano:
      ctx.env === 'production'
        ? {
            preset: 'default'
          }
        : false
  }
})