var express = require('express'),
	restful = require('node-restful'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose = restful.mongoose;


var app = express();
	app.use(bodyParser.urlencoded({
		  extended: true
		}));	
	app.use(bodyParser.json());
    app.use(methodOverride());﻿
    
    app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, PUT, HEAD");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});

mongoose.connect('mongodb://localhost/restful');


var ArticleSchema = mongoose.Schema({
	title: 'string',
	body: 'string',
});


var Articles = restful.model('articles', ArticleSchema);

Articles.methods(['get', 'put', 'post', 'delete']);
Articles.before('get', function(req, res, next){
  res.header("Content-Type", "application/json");
  next();
});




Articles.register(app, '/api/articles');


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

console.log('Server started...');

