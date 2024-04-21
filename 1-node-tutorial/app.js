const http = require('http');
const fs = require('fs');

http
	.createServer(function (req, res) {
		const text = fs.createReadStream('./content/big.txt', 'utf8');
		text.on('open', () => {
			text.pipe();
		});
		text.on('error', err => {
			res.end(err);
		});
	})
	.listen(5000);
