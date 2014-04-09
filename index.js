var server = require("./server");
var router = require("./router");
var request = require("request");
var requestHandlers = require("./requestHandlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/update"] = requestHandlers.update;
handle.webRoot = requestHandlers.renderWebRoot;

server.start(router.route, handle);

