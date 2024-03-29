const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
