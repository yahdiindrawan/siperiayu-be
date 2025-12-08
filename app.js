import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

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
import IndeksBGTerbangunPrasaranaRouter from "./router/indeks/indeksBGTerbangunPrasaranaRouter.js";
// Kalkulator Router
import klasifikasiRouter from "./router/kalkulator/klasifikasiRouter.js";
import prasaranaRouter from "./router/kalkulator/prasaranaRouter.js";
// Settings Router
import heroRouter from "./router/settings/heroRouter.js";
import peraturanRouter from "./router/settings/peraturanRouter.js";

import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://siperi-ayu.vercel.app/",
  "https://siperi-ayu.indramayukab.go.id",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// Gunakan CORS middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/files", express.static(path.join(__dirname, "files")));
// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
// );
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
app.use(
  "/api/v1/indeks/indeks-bg-terbangun-prasarana",
  IndeksBGTerbangunPrasaranaRouter
);
// kalkulator
app.use("/api/v1/kalkulator/klasifikasi", klasifikasiRouter);
app.use("/api/v1/kalkulator/prasarana", prasaranaRouter);
// settings
app.use("/api/v1/settings/hero", heroRouter);
app.use("/api/v1/settings/peraturan", peraturanRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Connection DB
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database connect");
});
