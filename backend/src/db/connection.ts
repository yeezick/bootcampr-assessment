import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// Define your connection URI here
const MONGODB_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose.set("returnOriginal", false); //for findByAndUpdate to return a reference to object at location

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error connected to MongoDB: ${error.message}`);
      process.exit(1);
    }
  }

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  })

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB has disconnected!");
  })

  mongoose.connection.on("error", (error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
  })
}

export default connect;



// mongoose
//   .connect(MONGODB_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .catch((error) => {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//   });

// mongoose.connection.on("disconnected", () => {
//   console.log("MongoDB has disconnected!");
// });

// mongoose.connection.on("error", (error) => {
//   console.error(`Error connecting to MongoDB: ${error}`);
// });

// export default mongoose.connection;
