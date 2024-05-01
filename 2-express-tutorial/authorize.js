const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user === 'Dmitriy') {
		req.user = { name: 'Dmitriy', id: 1 };
		next();
	} else {
		res.status(401).send('Unauthorized');
	}
};

module.exports = authorize;
