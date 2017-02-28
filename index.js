var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  console.dir( res.req.query);
});

app.post('/', function (req, res) {
  console.dir(req.body)
});

app.listen(3000)