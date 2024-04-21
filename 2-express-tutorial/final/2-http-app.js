const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/style.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
	const url = req.url;
	// Home page
	if (url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(homePage);
		res.end();
	} // About page
	else if (url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>About</h1>');
		res.end();
	} else if (url === '/style.css') {
		res.writeHead(200, { 'Content-Type': 'text/css' });
		res.write(homeStyles);
		res.end();
	} else if (url === '/logo.svg') {
		res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
		res.write(homeImage);
		res.end();
	} else if (url === '/browser-app.js') {
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		res.write(homeLogic);
		res.end();
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.write('<h1>Page not found</h1>');
		res.end();
	}
});

server.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
