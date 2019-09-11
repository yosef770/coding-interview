const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const bodyParser = require('body-parser').json();
const accountRoutes = require('./api/account/create');
const notificationRoutes = require('./api/notification/notification');
const router = express.Router();
const path = require('path');
=======
>>>>>>> origin/master


mongoose.connect('mongodb://localhost:27017/codeTest', {
	autoReconnect: true,
	reconnectTries: 60,
	reconnectInterval: 10000
});

const app = express();
app.listen(3000);

// app.use(cors());
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin: *");
	res.header("Access-Control-Allow-Credentials: true ");
	res.header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
	res.header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
	next();
});
app.use(bodyParser);

app.use('/account/create', accountRoutes);
app.use('/notification',notificationRoutes );


// Send main static files to client
const clientPath = path.resolve( __dirname, './client');
app.use(express.static(clientPath)); // set client directory to be static directory
router.get('/', getMainPage); // for http://localhost:3000 get the index.html file with index.js script
function getMainPage(req, res, next){
	const filePath = path.resolve( __dirname, './client/index.html');
	res.sendFile(filePath);
}
app.use('/', router); // user this rount on the express app



console.log('app running on port 3000...');

module.exports = app;
