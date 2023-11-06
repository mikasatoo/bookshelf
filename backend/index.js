import express from 'express';
import { PORT } from './config.js';
// import mongoose from 'mongoose';
// import booksRoute from './routes/booksRoute.js';
// import cors from 'cors';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to the Bookshelf App');
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in server setup");
    } else {
        console.log(`App is listening on port ${PORT}`);
    }
});