var express = require('express');
var sql = require("mssql");
var app = express();
const ImppaService  = require('./services/index')
const indexRouter = require('./routes/index');

//ImppaService.ConectarDB();

var server = app.listen(8081, function () {
    console.log('Server is running..');
});

app.use('/', indexRouter);
