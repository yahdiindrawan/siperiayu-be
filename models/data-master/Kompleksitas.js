import mongoose, { Schema } from "mongoose";

const kompleksitasSchema = new mongoose.Schema(
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

const Kompleksitas = mongoose.model("Kompleksitas", kompleksitasSchema);

export default Kompleksitas;
