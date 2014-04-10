var socket = io.connect('http://localhost');
var $temp = $(".temp");
var $timeStamp = $(".timeStamp");

socket.on('tempReading', function (data) {
	console.log(data);
	$temp.text(data.temp);
	$timeStamp.text(data.timeStamp);
});
