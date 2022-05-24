const express = require("express");
const app = express();
const {readFile} = require('fs');

app.get('/', (req, res) => {
	readFile('./index.html', 'utf-8', (err, html) => {
		if (err) {
			res.status(500).send('there was an error')
		}
		res.send(html);
	})
})

app.listen(3000)
