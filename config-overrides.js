const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

function pathResolve (pathUrl) {
  return path.join(__dirname, pathUrl)
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#2BC17B' },
  }),
  addWebpackAlias({
    '@': pathResolve('./src')
  })
);