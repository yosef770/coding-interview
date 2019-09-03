const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser').json();
const accountRoutes = require('./api/account/create');
const notificationRoutes = require('./api/account/create'); // todo: create notification route file

mongoose.connect('mongodb://localhost:27017/codeTest', {
	autoReconnect: true,
	reconnectTries: 60,
	reconnectInterval: 10000
});

const app = express();
app.listen(3000);

app.use(require('body-parser').json());

app.use('/account/create', require('./api/account/create'));

console.log('app running on port 3000...');
console.log('app running on 3000...');

module.exports = app;
