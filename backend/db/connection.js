import mongoose from "mongoose";
import "dotenv/config.js";

// Define your connection URI here
const MONGODB_URI = 'mongodb+srv://admin-jessica:rjq.dnx%40ZRU-wyw1dzr@bootcamprcluster.qw8w2ox.mongodb.net/?retryWrites=true&w=majority'

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
