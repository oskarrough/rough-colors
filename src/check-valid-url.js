const urlRegex = require('url-regex');

module.exports = function (Url) {
	return urlRegex().test(Url);
}
