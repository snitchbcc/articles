const fm = require("front-matter");
const fs = require("fs");
const path = require("path");
const base = require("./base");

base.forEach(({filePath}) => {
	const data = fs.readFileSync(filePath).toString();
    fs.writeFileSync(filePath, data.replace(/NotWren/g, "Wren"));
});

