var express = require('express');
var middleware = require('./middle-ware.js');
var app = express();
var port = process.env.PORT || 3000;




app.use(middleware.logger);

/*app.get('/',function(req,res){
	res.send('hello tarun konda');
});*/


app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About us!');
})

app.use(express.static(__dirname+'/public'));

//console.log(__dirname);

app.listen(port,function(){
	console.log('express server started'+port);
});