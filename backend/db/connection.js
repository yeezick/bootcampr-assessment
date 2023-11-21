import mongoose from "mongoose";
import "dotenv/config.js";

// Define your connection URI here
const MONGODB_URI = process.env.MONGODB_URI

mongoose.set("strictQuery", false);
mongoose.set("returnOriginal", false); //for findByAndUpdate to return a reference to object at location
const connectDB = async () => {
  try {

    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log('Connected to MongoDB');

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB has disconnected!');
    });

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectDB;
