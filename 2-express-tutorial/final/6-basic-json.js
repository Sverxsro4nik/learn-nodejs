const express = require('express');
const path = require('path');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
	res.status(200).json(products);
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
