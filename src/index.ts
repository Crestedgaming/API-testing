import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import heroesRouter from './routes/heroes';
import {connectToDatabase} from './config/db'
connectToDatabase();

const app = express();

app.use('/heroes', heroesRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});