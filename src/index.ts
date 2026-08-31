import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import heroesRouter from './routes/heroes';
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URL || "");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/heroes', heroesRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});