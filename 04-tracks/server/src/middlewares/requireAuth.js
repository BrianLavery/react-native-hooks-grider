const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// next is a signal to move onto next middleware in our middlewares chain
module.exports = (req, res, next) => {
	const { authorization } = req.headers; // pull off Authorization header

	if (!authorization) {
		return res.status(401).send({ error: 'You must be logged in.' });
	}

	const token = authorization.replace('Bearer ', '');
	// Third argument is the callback function called after validation check
	jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
		if (err) {
			return res.status(401).send({ error: 'You must be logged in.' });
		}

		const { userId } = payload;

		const user = await User.findById(userId);

		// We attach the user to the req object
		req.user = user;
		next();
	});
};
