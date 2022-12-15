function route(handlers, pathname) {
  console.log("About to route a request for " + pathname);
  // Check if the request url is a function. since we mapped our expected request urls to a function in request handlers
  if (typeof handlers[pathname] === "function") {
    handlers[pathname]()
  } else {
    console.log("No request handler found for " + pathname);
  }
}

exports.route = route;
