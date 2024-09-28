import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
// routes imports
import connectDB from './config/db.js';
import router from './routes/userRoutes.js';
// dot env config

dotenv.config();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// env variables
const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

// Database Connection
connectDB(mongo_url);

// Router
app.use('/api/v1/user', router);

app.listen(port, () => {
    console.log(`Server Up! ${port}`);
})