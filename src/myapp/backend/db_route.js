// //------include all modules-------
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//--------get all routes--------
var apiRoutes = express.Router();
var routePrefix = '/api';
var user = require("./getuser");

//------get data from db table-------
app.use('/api', apiRoutes);
app.use(routePrefix + '/posts', user);

//------localhost run on port 5000--------
app.listen(5000, function (err) {
  if (err) throw err;
  console.log("port run 5000");
});