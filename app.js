import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRouter from './routes/bookRouter.js';

const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const db = mongoose.connect('mongodb://localhost/rest-library');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter());

app.get('/', (req, res) => {
  res.send('My api');
});

const port = process.env.PORT || 3000;
app.listen(port, (() => {
  console.log(`Running on port ${port}`);
}));
