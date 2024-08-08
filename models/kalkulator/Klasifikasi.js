import mongoose, { Schema } from "mongoose";

const klasifikasiSchema = new mongoose.Schema(
  {
    classification: {
      type: String,
      required: [true, "Klasifikasi harus diinput"],
      unique: [true, "Klasifikasi sudah digunakan"],
    },
    weight: {
      type: Number,
      required: [true, "bobot harus diinput"],
    },
  },
  {
    timestamps: true,
  }
);

const Klasifikasi = mongoose.model("Klasifikasi", klasifikasiSchema);

export default Klasifikasi;
