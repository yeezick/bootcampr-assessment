import mongoose from "mongoose";
import "dotenv/config.js";

const MONGODB_URI = 'mongodb+srv://jheimburge:nXdzDT3seoy8YVMa@cluster0.m5owbrn.mongodb.net/bootcampr-assessment?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);
mongoose.set("returnOriginal", false); //for findByAndUpdate to return a reference to object at location

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
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
