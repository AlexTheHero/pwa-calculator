const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// const PORT = process.env || 9000;
app.listen(9000);

// var static = require('node-static');
// var file = new static.Server();
// require('http').createServer(function(request, response) {
// 	request.addListener('end', function() {
// 		file.serve(request, response);
// 	}).resume();
// }).listen(process.env.PORT || 3000);