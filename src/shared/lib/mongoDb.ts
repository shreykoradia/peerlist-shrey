import mongoose from "mongoose";
import { config } from "dotenv";

config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;

if (!MONGO_DB_URI) {
  throw new Error("MongoDB URI not found");
}

let isConnected = false;

export const connectMongoDB = async () => {
  try {
    if (isConnected) {
      console.log("Using existing MongoDB connection");
      return mongoose.connection;
    }

    const connection = await mongoose.connect(MONGO_DB_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
