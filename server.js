var http = require("http");
var url = require("url");
var server = http.createServer();
var io = require("socket.io").listen(server);
var tempEmitter = require("./tempEmitter");
var moment = require("moment");

server.listen(8000);

function start(route, handle) {
    function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("request for " + pathname + " received");	
		route(handle, pathname, res);
	}

	server.on("request", onRequest);

	io.sockets.on('connection', function (socket) {
		tempEmitter.on("temp:loaded", function (temp) {
			var timeStamp = moment().format("ddd, h:mm:ss a");
			socket.emit('tempReading', { temp: temp, timeStamp: timeStamp});
		});
	});
}

exports.start = start;
