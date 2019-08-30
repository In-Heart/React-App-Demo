const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
  addDecoratorsLegacy,
  useBabelRc
} = require('customize-cra')
const path = require('path')
const theme = require('./package.json').theme
module.exports = {
  webpack: override(
    addWebpackAlias({
      '@common': path.resolve(__dirname, 'src/common'),
      '@image': path.resolve(__dirname, 'src/image'),
      '@resource': path.resolve(__dirname, 'src/resource'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }),
    useBabelRc(),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      libraryDirectory: 'es',
      style: 'css',
      legacy: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: theme
    }),
    addDecoratorsLegacy({
      legacy: true
    })
  )
}
