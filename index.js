const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Titi');
});

app.listen(8080, () => {
	console.log('port 8080 en ecoute');
});