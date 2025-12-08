// db.js
import mongoose from "mongoose";

// Variabel untuk menampung koneksi yang sudah di-cache
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    console.log("Using cached database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Establishing new database connection");
    const opts = {
      bufferCommands: false, // Penting untuk Serverless
    };

    cached.promise = mongoose
      .connect(process.env.DATABASE, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
