// Import the required modules
import mongoose from "mongoose";
import "dotenv/config.js";

// Define your connection URI here
const MONGODB_URI = process.env.MONGODB_URI;

// Disable strict query mode
mongoose.set("strictQuery", false);

// Set the option to return the modified document
// when using the `findOneAndUpdate` method
mongoose.set("returnOriginal", false);

// Connect to MongoDB using the provided URI
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 45000,
  poolSize: 10,
})
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });

// Event listener for disconnection
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB has disconnected!");
});

// Event listener for connection errors
mongoose.connection.on("error", (error) => {
  console.error(`Error connecting to MongoDB: ${error}`);
});

// Export the MongoDB connection
export default mongoose.connection;