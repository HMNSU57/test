
const express = require('express');
const app = express();
const port = 3000;

// app.disable("x-powered-by");

app.get('/', (req, res) => {
	  res.send('Hello, World!');
});

app.listen(port, () => {
	  console.log(`Server is listening at http://localhost:${port}`);
});