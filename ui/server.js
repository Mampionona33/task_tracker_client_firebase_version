const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';
const path = require('path');

if (enableHMR && process.env.NODE_ENV !== 'production') {
  console.log('Adding HMR ');
  const webpack = require('webpack');
  const devMiddlware = require('webpack-dev-middleware');
  const hotMiddlware = require('webpack-hot-middleware');

  // If process.env.NODE_ENV === developpment push new config to webpack.config
  const config = require('./webpack.config');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  console.log(config);
  const compiler = webpack(config);
  app.use(devMiddlware(compiler));
  app.use(hotMiddlware(compiler));
}

const UI_API_ENDPOINT =
  process.env.UI_API_ENDPOINT || 'http://localhost:3000/graphql';
const env = { UI_API_ENDPOINT };

app.get('/env.js', (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
