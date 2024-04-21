const express = require('express');
const path = require('path');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	const newProducts = products.map(product => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
	const { id } = req.params;
	const product = products.find(p => p.id === Number(id));
	if (!product) {
		return res
			.status(404)
			.json({ success: false, msg: `No product with id ${id}` });
	}
	res.json(product);
});

app.get('/api/v1/query', (req, res) => {
	const { search, limit } = req.query;
	let sortedProducts = [...products];
	if (search) {
		sortedProducts = sortedProducts.filter(product => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
		return res.status(200).json({ success: true, data: [] });
	}
	res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
