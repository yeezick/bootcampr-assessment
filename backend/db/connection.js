import mongoose from "mongoose";
import "dotenv/config.js";

// Define your connection URI here
const MONGODB_URI = 'mongodb+srv://jiedong111:cyhfBWXZVfeWATD8@cluster0.tqs9flb.mongodb.net/?retryWrites=true&w=majority'

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

mongoose.connection.on('connected', (event) => {
  console.log('Connected to mongoDB cluster')
})

export default mongoose.connection;
