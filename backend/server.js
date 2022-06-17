import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import errorHandler from './middleware/error.js';

// Routes
import authRoutes from './route/userRoute.js';
import privateRoutes from './route/privateRoute.js';
import productRoutes from "./route/productRoute.js";
import orderRoutes from "./route/orderRoute.js";


dotenv.config({ path: "./config.env" });
const app = express();

app.use(cors());

// connection mongodb
connectDB();

// middlewares
// app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);

// routes
app.use('/api/products',productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/order',orderRoutes)
app.use('/api/private', privateRoutes);



const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, process.env.HOST_NAME, () => {
  console.log(`Server is listening at http://${process.env.HOST_NAME}:${PORT}`);
});


process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error ${err}`);
  server.close(() => process.exit(1));
});