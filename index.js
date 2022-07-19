import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from './router.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.8pnqpgo.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
// const cors = require('cors');

app.use(express.json());
app.use(express.static('static'));
app.use(cors());
app.use(fileUpload({}));

app.use('/api', router);
// app.use('/users', usersRouter);
// app.use('/api', router);
// app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
