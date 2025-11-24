import express from "express";
import { envConfig } from "./config/envConfig";

const app = express();

const PORT = envConfig.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
