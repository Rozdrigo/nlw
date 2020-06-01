import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello Word'))

app.listen(3333, () => console.log('server running'));