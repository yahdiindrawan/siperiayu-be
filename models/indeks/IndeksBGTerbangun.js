import mongoose, { Schema } from "mongoose";

const indeksBGTerbangunSchema = new mongoose.Schema(
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

const IndeksBGTerbangun = mongoose.model(
  "IndeksBGTerbangun",
  indeksBGTerbangunSchema
);

export default IndeksBGTerbangun;
