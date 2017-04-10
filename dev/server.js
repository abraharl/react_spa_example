var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app),
  path = require('path');

var filePath = path.resolve(__dirname + '/../')

app.use('/output/', express.static(path.join(filePath, 'output')));

app.get('/', function(req, res){
  res.redirect('/home');
});

app.get('/:type(home|stuff|contact)', function(req, res) {
  res.sendfile(filePath + '/main.html');
});

app.listen(3000);