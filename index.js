var http = require('http'),
    httpProxy = require('http-proxy'),
    auth = require('http-auth')
    //serviceUrl = process.env.SERVICE_URL; //http://node-js-sample.nodejs:8080

var basic = auth.basic({
    file: "/opt/app-root/src/users.htpasswd"
});

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(basic, function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  var serviceUrl = req.get('targetsvc')
  console.log(req)
  proxy.web(req, res, { target: serviceUrl });
});


//console.log("listening on port 8080 and proxying requests to " + serviceUrl);

server.listen(8080);



//
// DO NOT Create your target server
//
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(9000);