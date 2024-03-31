const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = path => {
	return new Promise((resolve, rejects) => {
		readFile(path, 'utf-8', (err, result) => {
			if (err) {
				rejects(err);
			} else {
				resolve(result);
			}
		});
	});
};

getText('./content/first.txt')
	.then(result => console.log(result))
	.catch(err => console.log(err));

const start = async () => {
	try {
		const first = await readFilePromise('./content/first.txt', 'utf-8');
		const second = await readFilePromise('./content/second.txt', 'utf-8');
		await writeFilePromise(
			'./content/result.txt-mind-grande',
			`THIS IS AWESOME : ${first}, ${second}`
		);
	} catch (error) {
		console.log(error);
	}
};
start();
