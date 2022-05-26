const express = require('express');

const app = express();

// Function we run when someone makes a request to this route
// Function called automatically with the http request object and a response object
app.get('/', (req, res) => {
	res.send('Hi there!');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
