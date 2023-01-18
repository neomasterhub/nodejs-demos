var http = require("http");
var randomColor = require('random-color');
var genNewColor = () => randomColor().hexString();

http.createServer(function (req, res) {
	res.writeHead(200, { "content-type": "html" });
	res.write(`<h1 style='color:${genNewColor()};'>Hello World!</h1>`);
	res.end();
})
	.listen(3000);
