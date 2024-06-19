import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application } from "express";

import { dataSource } from "./config/db";
import errorMiddleware from "./middlewares/errorMiddleware";
import customerRoutes from "./routes/customerRoutes";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 3000;

dataSource
  .initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error: ", err));
