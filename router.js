function route(handle, pathname, response) {
	console.log("about to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		handle.webRoot(pathname, response);
	}
}

exports.route = route;