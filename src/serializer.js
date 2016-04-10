"use strict";

module.exports.format = function (colorData) {
	return colorData.map(color => {
		return {
			frequency: color[0],
			rgb: color[1]
		};
	});
};
