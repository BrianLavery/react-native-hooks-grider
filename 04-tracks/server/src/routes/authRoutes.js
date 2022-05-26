const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User'); // Mongoose will create a collection automatically for us on MongoDB

const router = express.Router();

router.post('/signup', async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = new User({ email, password });
		await user.save(); // This is an asyncrhonous operation to the DB

		const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
		res.send({ token });
	} catch (error) {
		return res.status(422).send(error.message); // return so don't execute any code after this
	}
});

module.exports = router;
