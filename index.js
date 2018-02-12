const fs = require('fs');
const stats = require('fs').Stats;

module.exports = (path, fileName) => {
	let queue = fs.readdirSync(path);
	// use bfs to return the first instance of the fileName
	while (queue.length > 0) {
		const file = queue.shift();
		if (file.split("/")[file.split("/").length - 1] === fileName) {
			return path + "/" + file;
		} else if (fs.existsSync(path + "/" + file) && fs.statSync(path + "/" + file).isDirectory()) {
			// maps to append the nested string to the filestring
                        queue = queue.concat(fs.readdirSync(path + "/" + file).map(fileStr => file + "/" + fileStr));
		}
	}
	return "";
}
