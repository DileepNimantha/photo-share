var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./api/models/model');
var routes = require('./api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PhotoShare');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

// Handline unavailable routes
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);
console.log('Photo share RESTful API started on: ' + port);
