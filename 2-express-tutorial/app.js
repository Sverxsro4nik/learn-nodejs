const express = require('express');
const path = require('path');
const people = require('./routes/people');
const auth = require('./routes/auth');
const app = express();

// Setup static and middleware
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use('api/people', people);
app.use('login', auth);

app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
