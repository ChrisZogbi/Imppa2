import express from 'express';
var app = express();
import { json } from 'body-parser';
import { assignRoutes } from './routes/index';
import db from './services/index';

app.use(json());
assignRoutes(app);


var server = app.listen(3000, function () {
    console.log('Server is running in 3000..');
});

