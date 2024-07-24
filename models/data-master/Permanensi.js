import mongoose, { Schema } from "mongoose";

const permanensiSchema = new mongoose.Schema(
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

const Permanensi = mongoose.model("Permanensi", permanensiSchema);

export default Permanensi;
