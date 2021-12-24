module.exports = {
  inputDir: './src',
  outputDir: './dist',
  fontTypes: ['ttf', 'eot', 'woff2', 'woff'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  fontsUrl: '/static/fonts',
  formatOptions: {
    json: {
      indent: 2,
    },
    ts: {
      types: ['constant', 'literalId'],
      singleQuotes: true,
    },
  },
};
