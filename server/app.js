import bodyParser from 'body-parser';
import express from 'express';
import Router from './routes/Router';

const app = express();
const port = parseInt(process.env.PORT, 10) || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/tribute', Router);

app.get('*', (req, res) => res.status(200).json({ message: 'welcome' }));

app.listen(port, () => console.log('Listening...'));
