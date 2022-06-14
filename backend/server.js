import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
// import bodyParser from "body-parser";
import errorHandler from './middleware/error.js';
import authRoutes from './route/userRoute.js';
import privateRoutes from './route/private.js';
import productRoutes from "./route/productRoute.js";


dotenv.config({ path: "./config.env" });
const app = express();

app.use(cors());

// connection mongodb
connectDB();

// middlewares
// app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use('/api/products',productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/private', privateRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, process.env.HOST_NAME, () => {
  console.log(`Server is listening at http://${process.env.HOST_NAME}:${PORT}`);
});


process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error ${err}`);
  server.close(() => process.exit(1));
});