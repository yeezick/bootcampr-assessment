import mongoose from "mongoose";
import "dotenv/config.js";
//const { MongoClient } = require("mongodb");

// Define your connection URI here
const MONGODB_URI = `mongodb+srv://jordanjennings12:${process.env.PASSWORD}@cluster0.urbuwya.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", false);
mongoose.set("returnOriginal", false); //for findByAndUpdate to return a reference to object at location


//throwing errors for me
// mongoose
//   .connect(MONGODB_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .catch((error) => {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//   });

  mongoose
  .connect(MONGODB_URI)
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB has disconnected!");
});

mongoose.connection.on("error", (error) => {
  console.error(`Error connecting to MongoDB: ${error}`);
});

export default mongoose.connection;
