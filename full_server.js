 var static =require('node-static'),
 	http=require('http'),
 	Faye=require('faye');
 	Time=require('time');
 	var fayeserver=new Faye.NodeAdapter({mount :'/faye',timeout:45});

 	var file=new(static.Server)('.');
 	var server = http.createServer(function(req,res){
 		req.addListener('end',function(){
 			file.serve(req,res);
 		});
 	});

 	fayeserver.attach(server);
 	server.listen(8000,function(){
 		console.log('Server started !')
 	});

// var static = require('node-static')
// 		, http = require('http')
// 		, Faye = require('faye');

// var fayeServer = new Faye.NodeAdapter( { mount: '/faye', timeout: 5 } );

// var file = new(static.Server)('.');

// var server = http.createServer(function(req, res) {
//   req.addListener('end', function() {
//     file.serve(req, res);
//   });
// });

// fayeServer.attach(server);
// var port= process.env.PORT || 8000;
// server.listen(port,function()
// 	{
//  		console.log('Server started !')
//  	});
