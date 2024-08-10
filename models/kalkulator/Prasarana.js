import mongoose, { Schema } from "mongoose";

const prasaranaSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Jenis Prasarana harus diinput"],
    },
    building: {
      type: String,
    },
    satuan: {
      type: String,
    },
    hspbg: {
      type: Number,
      required: [true, "HSPBG harus diinput"],
    },
    satuan_prasarana: {
      type: String,
    },
    charge: {
      type: Number,
      default: 0,
    },
    maksimum_per_unit: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Prasarana = mongoose.model("Prasarana", prasaranaSchema);

export default Prasarana;
