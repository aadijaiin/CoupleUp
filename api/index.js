import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});