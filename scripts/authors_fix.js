const fm = require("front-matter");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const base = require("./base");

base.forEach(({filePath}) => {
	const data = fs.readFileSync(filePath).toString();

	if (path.extname(filePath) === ".json") {
		const quiz = JSON.parse(data);
		if (typeof quiz.authors !== "string") return;

		quiz.authors = quiz.authors.split(",").map(_ => _.trim());

		fs.writeFileSync(filePath, JSON.stringify(quiz, null, 4) + "\n");
	} else if (path.extname(filePath) === ".md") {
		const z = fm(data);
		if (typeof z.attributes.authors !== "string") return;

		z.attributes.authors = z.attributes.authors.split(",").map(_ => _.trim());

		fs.writeFileSync(filePath, `---\n${yaml.dump(z.attributes, {
			quotingType: "\""
		})}---\n\n${z.body}`);
	}
});
