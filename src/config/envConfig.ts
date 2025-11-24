import { config } from "dotenv";
config();

export const envConfig = {
  PORT: process.env.PORT || 5000,
  BASE_URL: process.env.BASE_URL || "",
  MONGODB_URI: process.env.MONGODB_URI || "",
};
