const express = require('express');
const mongoose = require('mongoose');
require('./app/models/test');
const config = require('./config');

const app = express();
config.express(app);
config.routes(app);

const { appPort, mongoUri } = config.app;

mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => app.listen(
    appPort,
    () => console.log(`Listening on post ${appPort}...`),
  ))
  .catch(err => console.error(`error connecting to mongo: ${mongoUri}`, err));
