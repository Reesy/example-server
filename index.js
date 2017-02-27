var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.get('/', function (req, res) {
  res.send('Get received');
  console.log("A get request was sent with : " + req);
});

app.post('/', function (req, res) {
  res.send("Post received");
  console.log("A post reqeust was sent with : " + req);
});

app.listen(3000)