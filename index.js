var http = require('http'),
    httpProxy = require('http-proxy'),
    serviceUrl   = process.env.SERVICE_URL; //http://node-js-sample.nodejs:8080



console.log("listening on port 8080 and proxying requests to " + serviceUrl);
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:serviceUrl,auth:'admin:admin'}).listen(8080); // See (†)



//
// DO NOT Create your target server
//
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(9000);