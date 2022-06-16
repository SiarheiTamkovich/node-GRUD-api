const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './dist/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './prod'),
    filename: '[name].bundle.js'
  }
}