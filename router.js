var fs = require('fs');
var path = require('path');
var mime = require('mime');

function serve(response, filePath) {
  fs.readFile(filePath, function(error, data) {
    if (error) {
      console.log(error);
    }
    else {
      response.writeHead(200, {
        "Content-Type": mime.lookup(path.basename(filePath))
      });
      response.end(data);
    }
  });
}

function route(request, response) {
  if (request.url == "/") {
    serve(response, "public/index.html");
  }
  else {
    serve(response, "public" + request.url);
  }
}

exports.route = route;