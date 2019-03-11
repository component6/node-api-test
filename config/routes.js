const tests = require('../app/controllers/tests');
const auth = require('../app/controllers/auth');

module.exports = (app) => {
  // tests
  app.get('/tests', tests.getAll);
  app.post('/tests', tests.create);
  app.put('/tests/:id', tests.update);
  app.delete('/tests/:id', tests.remove);
  // auth
  // app.post('/signin', auth.signIn);
};
