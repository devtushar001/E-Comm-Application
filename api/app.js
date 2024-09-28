import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
// routes imports
import connectDB from './config/db.js';
import { registerController } from './controllers/userController.js';
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
app.use('/api/v1/user', registerController);

app.listen(port, () => {
    console.log(`Server Up! ${port}`);
})