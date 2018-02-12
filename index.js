const fs = require('fs');
const stats = require('fs').Stats;

const isNotUndefined = val => val !== undefined;

// adds a name to the export in order to call it recursively
module.exports = function findFilePath(path, fileName) {
	return fs.readdirSync(path).map((file) => {
		if (file === fileName) {
			return path + "/" + fileName;
		} 

		if(fs.statSync(path + "/" + file).isDirectory()) {
			return findFilePath(path + "/" + file, fileName);
		}
	})
	// filters out all undefined
	.filter(isNotUndefined)
	// reduces the string into an empty string if found
	.reduce((res, foundPath) => {
		return res + foundPath;
	}, "");
}
