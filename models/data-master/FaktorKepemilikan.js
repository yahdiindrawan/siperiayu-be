import mongoose, { Schema } from "mongoose";

const faktorKepemilikanSchema = new mongoose.Schema(
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

const FaktorKepemilikan = mongoose.model(
  "FaktorKepemilikan",
  faktorKepemilikanSchema
);

export default FaktorKepemilikan;
