// API: https://github.com/josip/node-colour-extractor#usage
var ce = require('colour-extractor')

exports.all = function (imageUrl, callback) {
	ce.topColours(imageUrl, true, function (colours) {
		callback(colours);
	});
}

exports.mapped = function (imageUrl, callback) {
	ce.colourKey(imageUrl, function (colours) {
		callback(colours);
	});
}

// exports.rgb2hex = function (r,g,b) {
// 	return ce.rgb2hex(r,g,b);
// }
