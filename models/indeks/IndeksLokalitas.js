import mongoose, { Schema } from "mongoose";

const indeksLokalitasSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
      required: [true, "indeks harus diinput"],
      unique: [true, "indeks sudah digunakan"],
    },
  },
  {
    timestamps: true,
  }
);

const IndeksLokalitas = mongoose.model(
  "IndeksLokalitas",
  indeksLokalitasSchema
);

export default IndeksLokalitas;
