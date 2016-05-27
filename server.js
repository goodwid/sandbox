const app = require('./app');

app.listen(process.env.PORT || process.argv[2] || 8080);
