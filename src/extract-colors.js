// API: https://github.com/josip/node-colour-extractor#usage
var ce = require('colour-extractor');

exports.all = function (imageUrl, callback) {
	const url = imageUrl.replace('https://', 'http://');
	ce.topColours(url, true, function (colours) {
		callback(colours);
	});
};

exports.mapped = function (imageUrl, callback) {
	const url = imageUrl.replace('https://', 'http://');
	ce.colourKey(url, function (colours) {
		callback(colours);
	});
};

// exports.rgb2hex = function (r,g,b) {
// 	return ce.rgb2hex(r,g,b);
// }
