import mongoose, { Schema } from "mongoose";

const indeksBGTerbangunPrasaranaSchema = new mongoose.Schema(
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

const IndeksBGTerbangunPrasarana = mongoose.model(
  "IndeksBGTerbangunPrasarana",
  indeksBGTerbangunPrasaranaSchema
);

export default IndeksBGTerbangunPrasarana;
