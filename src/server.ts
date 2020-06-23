import express from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.json({ message: 'hellowww!' });
});

app.listen(3001); 