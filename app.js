import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Router
import authRouter from "./router/authRouter.js";
// Data Master Router
import fungsiBangunanRouter from "./router/data-master/fungsiBangunanRouter.js";
import kompleksitasRouter from "./router/data-master/kompleksitasRouter.js";
import permanensiRouter from "./router/data-master/permanensiRouter.js";
import ketinggianRouter from "./router/data-master/ketinggianRouter.js";
import faktorKepemilikanRouter from "./router/data-master/faktorKepemilikanRouter.js";
// Indeks Router
import IndeksLokalitasRouter from "./router/indeks/indeksLokalitasRouter.js";
import IndeksBGTerbangunRouter from "./router/indeks/indeksBGTerbangunRouter.js";

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
app.use("/api/v1/data-master/permanensi", permanensiRouter);
app.use("/api/v1/data-master/ketinggian", ketinggianRouter);
app.use("/api/v1/data-master/faktor-kepemilikan", faktorKepemilikanRouter);
// indeks
app.use("/api/v1/indeks/indeks-lokalitas", IndeksLokalitasRouter);
app.use("/api/v1/indeks/indeks-bg-terbangun", IndeksBGTerbangunRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Connection DB
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database connect");
});
