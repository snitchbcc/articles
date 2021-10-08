const fs = require("fs");
const path = require("path");

const articlesRoot = path.join(__dirname, "..");

module.exports = {
    forEach(callback) {
        for (const year of fs.readdirSync(articlesRoot).filter(_ => /^\+?\d+$/.test(_))) {
            for (const month of fs.readdirSync(path.join(articlesRoot, year))) {
                for (const article of fs.readdirSync(path.join(articlesRoot, year, month))) {
			        const filePath = path.join(articlesRoot, year, month, article);
                    
                    callback({
                        year,
                        month,
                        article,
                        filePath,
                    });
                }
            }
        }
    }
};
