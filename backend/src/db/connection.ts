import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose.set("returnOriginal", false);

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Error connecting to MongoDB: ${error.message}`);
            process.exit(1);
        }
    }

    mongoose.connection.once("open", () => {
        console.log("Connected to MongoDB");
    })

    mongoose.connection.on("disconnected", () => {
        console.log("MonogoDB has disconnected!");
    })

    mongoose.connection.on("error", (error) => {
        console.log(`Error connecting to MongoDB: ${error}`);
    })
}

export default connect;