const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	const { name } = req.body;
	if (!person) {
		return res
			.status(401)
			.json({ success: false, msg: `No person with name ${name}` });
	}
	return res.status(200).json({ success: true, person: name });
});

module.exports = router;
