import express from "express";
import { envConfig } from "./config/envConfig";
import router from "./routes";
import { getDB } from "./config/db";

const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = envConfig.PORT;

const bootstrap = async () => {
  try {
    await getDB(); 
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect database", error);
    process.exit(1);
  }
};

bootstrap();
