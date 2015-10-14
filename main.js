var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');
var express = require('express');
var ss = require('socket.io-stream');
var path = require('path');
var Canvas = require('canvas')
var Image = Canvas.Image;

var app = express();

var server = app.listen(4000, function(){
    console.log('Server Started');
});

var io = require('socket.io').listen(server);

req = request.defaults({
	jar: true,
	rejectUnauthorized: false,
	followAllRedirects: true
});



req.get({
    url: "http://cmprzn.com:8080/",
    headers: {
        'User-Agent': 'Video Stream'
     }
  }, function(err, resp, body) {
	
	// load the html into cheerio
	var $ = cheerio.load(body);
	
    var canvas = $('#videoCanvas');
    
    console.log(canvas.src);
    
   // console.log('<img src="' + canvas.toDataURL() + '" />');
});
//
//var canvas = new Canvas(200, 200);
//var ctx = canvas.getContext('2d');
// 
//ctx.font = '30px Impact';
//ctx.rotate(.1);
//ctx.fillText("Awesome!", 50, 100);
// 
//var te = ctx.measureText('Awesome!');
//ctx.strokeStyle = 'rgba(0,0,0,0.5)';
//ctx.beginPath();
//ctx.lineTo(50, 102);
//ctx.lineTo(50 + te.width, 102);
//ctx.stroke();
// 
//console.log('<img src="' + canvas.toDataURL() + '" />');

app.get('/', function(req, res){
    res.sendfile("index.html");
});



