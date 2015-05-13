var express = require('express');
var app = express();
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

app.get('about', function (req, res) {
  res.send('Henry Van Dusen <br> hgv2102');
});

app.listen(3300, function () {
  console.log('hi, server running at 3300.')
});
