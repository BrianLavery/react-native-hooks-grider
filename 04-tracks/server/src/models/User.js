const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// Setting up password encryption
// We use function() definition to get access to user as this
userSchema.pre('save', function (next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

// Code to automate password checking process
userSchema.methods.comparePassword = function (candidatePassword) {
	const user = this;

	// We use a promise here to check password to use async / await; bcrypt relies entirely on callbacks
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) {
				return reject(err);
			}

			if (!isMatch) {
				return reject(false);
			}

			resolve(true);
		});
	});
};

mongoose.model('User', userSchema);
