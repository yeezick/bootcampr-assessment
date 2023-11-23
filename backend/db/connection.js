import mongoose from "mongoose";
import "dotenv/config.js";

// Define your connection URI here
//ideally, we should use .env for the URI here. 
const MONGODB_URI = "mongodb+srv://Yufa:QmEQw1nEpQSG7Eos@cluster0.fyv9tjw.mongodb.net/"

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

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }


export default mongoose.connection;
