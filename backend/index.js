// Express JS Hello World Server

import express from 'express';
import uploadAudio from './uploadAudio.js';
import multer from 'multer';
const app = express();
import cors from 'cors'
import * as dotenv from 'dotenv';
const port = 4000 || process.env.PORT;

// enable cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the storage location for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },

  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.mp3');
  }
});

// Initialize multer middleware
const upload = multer({ storage });


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/uploadAudio', upload.single('file'), uploadAudio);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})