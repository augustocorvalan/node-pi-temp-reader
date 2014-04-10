/** TempEmitter */
var temp = require("./temp");
var EventEmitter = require("events").EventEmitter;
var util = require("util");

function TempEmitter() {
	var self = this;

	setInterval(function () {
		temp.loadTemp(function (temp) {
			self.emit("temp:loaded", temp);
		});
	}, 1000);
}

util.inherits(TempEmitter, EventEmitter);

module.exports = new TempEmitter();