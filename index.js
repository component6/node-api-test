// https://www.youtube.com/watch?v=E2BxOHkS9gU
// https://www.youtube.com/watch?v=TIH3dcZjrzk&t=334s
// https://www.youtube.com/watch?v=hTtGQh4qNxY

// Expected indentation of 4 spaces but found 6  indent
// todo надо настроить 2 пробела при табуляции а не 4, для emmet, eslint ругается

const express = require('express');
const mongoose = require('mongoose');
// const ejs = require('ejs');
require('./app/models/test');

// импортируем глобальные константы приложения
const config = require('./config');

// создаем экземпляр приложения
const app = express();
// импортируем конфигурацию сервера, передав экземпляр app
config.express(app);
// импортируем роуты, передав экземпляр app
config.routes(app);

const {
  appPort,
  mongoUri,
} = config.app;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => app.listen(
    appPort,
    () => console.log(`Listening on post ${appPort}...`),
  ))
  .catch(err => console.error(`error connecting to mongo: ${mongoUri}`, err));
