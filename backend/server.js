// =========================================================================
// ==================== get the packages we need ===========================
// =========================================================================
var express     = require('express');
var app         = express();
var v1 			    = new express.Router(); 
var bodyParser  = require('body-parser');
var ip 			    = require('ip');
var fs 			    = require('fs');
var path		    = require('path');

switch (process.env.NODE_ENV) {
	case 'development':
		var ENV = require('./modules/development.js');
  	break;
	case 'staging':
  	var ENV = require('./modules/staging.js');
  	break;
	case 'production':
  	var ENV = require('./modules/production.js');
  	break;
	default:
  	console.error("Unrecognized NODE_ENV: " + process.env.NODE_ENV);
  	process.exit(1);
}
// ==========================================================================
// ====================== start the webserver  ==============================
// ==========================================================================
var server = app.listen(ENV.port, ENV.address, function() {
	console.log('Server running at http://'+ENV.address+':'+ENV.port);
});
// ===========================================================================
// ================ Initialize express dependencies ==========================
// ===========================================================================
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist.dev'));
// Removing Angular's annoying # from the URL
app.get('/main', function(req, res) {
    res.sendFile(path.join(__dirname + "/../dist.dev/html/index.html"));
});
// ===========================================================================
// ================= Initialize the API routes ===============================
// ===========================================================================
app.use('/api/v1', v1);



function getToken(req, res, next){
	console.log(req.body);
	res.status(201).send("Token: "+req.body.token);
}

function auth(req, res, next){
	unirest.post(tinder+'auth')
	.headers(headers)
	.send({"facebook_token": token})
	.end(function (response) {
  		console.log(response.body);
  		res.send(response.body);
	});
}

function message(req, res, next){

}

function choice(req, res, next){

}

function recommendations(req, res, next){

}

v1.post('/token', getToken);
v1.get('/auth', auth);
v1.post('/message/:id', message);
v1.post('/:devision/:id', choice);
v1.get('/recommendations', recommendations);








