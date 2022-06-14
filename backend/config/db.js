import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; 
   const con = await mongoose.connect(uri, { 
    useUnifiedTopology : true,
    useNewUrlParser: true });
    console.log(`Mongodb Database Connected ${con.connection.host}`.bgBlue.white)
  } catch (err) {
    console.log(`Mongodb Database Not Connected ${err.message}`.bgRed.white)
  }
};

export default connectDB;