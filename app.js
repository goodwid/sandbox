const express = require('express');
const morgan = require('morgan');
const app = express();
const APIClient = require('omdb-api-client');
const jsonparser = require('body-parser').json();
const omdb = new APIClient();

app.use(morgan('dev'));

// function isAuth (auth) {
//   return auth === 'sekrit';
// }
//
// app.use((req, res, next) => {
//   if (isAuth(req.get('Authorization'))) {
//     next();
//   } else {
//     res.status(401).send('hit the pavement buddy.');
//   }
// });


app.post('/', jsonparser, (req, res) => {
  console.log(req.body.title);
  omdb({t: req.body.title}).list()
    .then(movie => res.json(movie))
    .catch(err => res.json({msg: 'this is an error', error: err}));

});

module.exports = app;
