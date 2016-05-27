const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))

function isAuth (auth) {
  return auth === 'sekrit';
}

app.use((req, res, next) => {
  if (isAuth(req.get('Authorization'))) {
    next();
  } else {
    res.status(401).send('hit the pavement buddy.');
  }
});


app.get('/', (req, res) => {

  res.send('Hello punk')
});

module.exports = app;
