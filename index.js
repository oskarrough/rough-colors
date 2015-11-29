// Enable ES5/6 in node
"use strict";

const express = require('express');
const app = express();

const extractColors = require('./src/extract-colors');
const checkValidUrl = require('./src/check-valid-url');
const serializer = require('./src/serializer');

app.get('/', function (request, response) {
	response.send('Rough colors.');
});

app.get('/v1/images/*', function (request, response) {
	let url = request.params[0];

	// Break if we don't have a valid URL.
	if (!checkValidUrl(url)) {
		response.send('not a valid URL');
		return;
	}

	// ?mapped=true return 3x3 mapped colors
	if (request.query.mapped) {
		extractColors.mapped(url, function (colors) {
			response.jsonp(serializer.format(colors));
		});
		return;
	}

	// By default returns all colors sorted by frequency
	extractColors.all(url, function (colors) {
		response.jsonp(serializer.format(colors));
	});
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
