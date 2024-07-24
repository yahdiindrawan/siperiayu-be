import mongoose, { Schema } from "mongoose";

const fungsiBangunanSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Kategori harus diinput"],
      unique: [true, "Kategori sudah digunakan"],
    },
    indeks: {
      type: Number,
      required: [true, "indeks harus diinput"],
    },
  },
  {
    timestamps: true,
  }
);

const FungsiBangunan = mongoose.model("FungsiBangunan", fungsiBangunanSchema);

export default FungsiBangunan;
