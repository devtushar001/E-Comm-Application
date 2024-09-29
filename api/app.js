import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
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
// app.use(cors());
app.use(cookieParser());

// env variables
const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

// Database Connection
connectDB(mongo_url);

// cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUDNARY_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_SECRET
})

// Router
app.use('/api/v1/user', router);

app.listen(port, () => {
    console.log(`Server Up! ${port} on ${process.env.NODE_ENV} Mode.`);
})