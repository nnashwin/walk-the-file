const fs = require('fs');
const stats = require('fs').Stats;

module.exports = (path, fileName) => {
	let queue = fs.readdirSync(path);
	let foundPath = path;
	// shifts off the first .git dir because it is unnecessary
	queue.shift();
	// use In-order to return the first instance of the fileName
	while (queue.length > 0) {
		const file = queue.shift();
		if (file === fileName) {
			return path + "/" + fileName;
		} else if (fs.statSync(path + "/" + file).isDirectory()) {
			// uses shift and concatenation from fs.readdirSync to keep the in-order dfs in alphabetical order
			queue = fs.readdirSync(path + "/" + file).concat(queue);
			path = path + "/" + file;
		}
	}
	return "";
}
