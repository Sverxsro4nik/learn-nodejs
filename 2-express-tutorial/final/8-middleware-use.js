const express = require('express');
const path = require('path');
const { products } = require('./data');
const logger = require('../logger');
const authorize = require('../authorize');

const app = express();

// req => middleware => res
app.use([logger, authorize]);

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
	res.send('<h1>About Page</h1>');
});
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
