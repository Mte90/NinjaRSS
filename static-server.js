var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(static.Server)('./', {
  headers: {"Cache-Control": "max-age=0, no-cache, must-revalidate"}
});

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
      console.log("REQ", request.url);
      if(/\.appcache$/.test(request.url)) {
        console.log("MANIFEST");
        file.serveFile("."+request.url, 200, {
          //"Cache-Control": "max-age=0, no-cache, no-store, must-revalidate"
          "Expires": "Tue, 21 Aug 2010 00:19:47 GMT",
          "Cache-Control": "max-age=0, no-cache, must-revalidate"
        }, request, response);
      } else {        
        file.serve(request, response);
      }
    });
}).listen(3000);
