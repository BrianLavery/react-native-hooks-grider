require('./models/User'); // don't assign to variable as exported line should only be executed ONE TIME ONLY
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // handles incoming json in body of a request
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json()); // This puts any parsed info on req on the body object
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
	'mongodb+srv://reactnativeapp:JnruHVcbKqYQP0ej@cluster0.awly3ml.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
	console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (error) => {
	console.error('Error connecting to mongo', error);
});

// Function we run when someone makes a request to this route
// Function called automatically with the http request object and a response object
// Second argument is middleware
app.get('/', requireAuth, (req, res) => {
	res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
