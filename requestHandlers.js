var fs = require("fs");

function start(response) {
	console.log("Request handler start was called");
	renderWebRoot("/html/index.html", response);	
}

function update(response) {
	console.log("Request handler update was called");
}

function renderWebRoot(pathname, response) {
	fs.readFile("./webroot" + pathname, function (error, content) {
		if (error) {
			console.log("No file found for " + pathname);
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found");
			response.end();
		} else {
			var extension = (pathname.split(".").pop());
			response.writeHead(200, getHeadersByFileExtension(extension));
			response.end(content, "utf-8");
		}
	})
}

function getHeadersByFileExtension(extension) {
	var headers = {},
		map = {
			"css": "text/css",
			"js": "applications/javascript",
			"ico": "image/x-icon",
			"html": "text/html"
		};
	headers["Content-Type"] = map[extension] || "text/plain";
	return headers;
}

exports.start = start;
exports.update = update;
exports.renderWebRoot = renderWebRoot;