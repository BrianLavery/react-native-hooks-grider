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

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(422).send({ error: 'Must provide email and password ' });
	}

	const user = await User.findOne({ email });

	if (!user) {
		return res.status(422).send({ error: 'Invalid password or email' });
	}

	try {
		await user.comparePassword(password);
		const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
		res.send({ token });
	} catch (error) {
		return res.status(422).send({ error: 'Invalid password or email' });
	}
});

module.exports = router;
