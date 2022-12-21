const { override, useBabelRc, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
  useBabelRc(),
  addWebpackModuleRule({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  })
)
