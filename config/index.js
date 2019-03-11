// импортируем константы приложения
const app = require('./app');
// импортируем конфигурацию сервера
const express = require('./express');
// импортируем роуты
const routes = require('./routes');

module.exports = {
  app,
  express,
  routes,
};
