import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Router
import authRouter from "./router/authRouter.js";
import fungsiBangunanRouter from "./router/data-master/fungsiBangunanRouter.js";
import kompleksitasRouter from "./router/data-master/kompleksitasRouter.js";

import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = 3000;

// Middleware
// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Parent Router
app.use("/api/v1/auth", authRouter);
// data-master
app.use("/api/v1/data-master/fungsi-bangunan", fungsiBangunanRouter);
app.use("/api/v1/data-master/kompleksitas", kompleksitasRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Connection DB
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database connect");
});
