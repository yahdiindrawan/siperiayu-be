import mongoose, { Schema } from "mongoose";

const ketinggianSchema = new mongoose.Schema(
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

const Ketinggian = mongoose.model("Ketinggian", ketinggianSchema);

export default Ketinggian;
