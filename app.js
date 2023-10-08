const express = require('express');
const port = 3000;

const app = express();

app.set('view engine', 'hbs');
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
