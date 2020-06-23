import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'hellowww!' }));

app.listen(3001);
