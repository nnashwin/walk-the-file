const fs = require('fs');
const stats = require('fs').Stats;

module.exports = (path, fileName) => {
	let queue = fs.readdirSync(path);
	// use In-order to return the first instance of the fileName
	while (queue.length > 0) {
		const file = queue.shift();
		if (file.split("/")[file.split("/").length - 1] === fileName) {
			return path + "/" + file;
		} else if (fs.existsSync(path + "/" + file) && fs.statSync(path + "/" + file).isDirectory()) {
			// uses shift and concatenation from fs.readdirSync to keep the in-order dfs in alphabetical order
			// maps to append the nested string to the filestring
			queue = fs.readdirSync(path + "/" + file).map(fileStr => file + "/" + fileStr).concat(queue);
		}
	}
	return "";
}
