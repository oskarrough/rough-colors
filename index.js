// Enable ES5/6 in node
"use strict";

const express = require('express');
const app = express();

const extractColors = require('./src/extract-colors');
const checkValidUrl = require('./src/check-valid-url');
const checkUrlExists = require('./src/check-url-exists');
const serializer = require('./src/serializer');

app.use(function(request, response, next) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function (request, response) {
	let url = request.query.url;

	// Break if we don't have a URL.
	if (!url) {
		console.log('no url');
		response.status(500).send('Specify a ?url=http://… query, please.');
		return;
	}

	// Break if we don't have a valid URL.
	if (!checkValidUrl(url)) {
		console.log('not valid url');
		response.send('not a valid URL');
		return;
	}

	// Break if the URL doesn't exist (we request and test)
	checkUrlExists(url, function (exists) {
		if (!exists) {
			console.log('does not exist');
			response.status(500).send('Could not fetch image. Is the url valid?');
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
});

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Rough colors listening at http://${host}:${port}`);
});
