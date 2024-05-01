const express = require('express');
const path = require('path');
const { products } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

const app = express();

// req => middleware => res
// app.use([logger, authorize]);
// app.use(express.static('./public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
	res.send('<h1>About Page</h1>');
});
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
