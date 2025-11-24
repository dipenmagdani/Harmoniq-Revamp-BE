import mongoose, { Connection } from "mongoose";
import { envConfig } from "./envConfig";

let conn: Connection;

export const getDB = () => {
  if (!conn && mongoose) {
    conn = mongoose.createConnection(envConfig.MONGODB_URI);
    console.log("Connected to Harmoniq Database");
  }
  return conn;
};
