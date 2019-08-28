var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var db = require('./services/index')

app.use(bodyParser.json());
routes.assignRoutes(app);


var server = app.listen(3000, function () {
    console.log('Server is running in 3000..');
});

