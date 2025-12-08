import mongoose, { Schema } from "mongoose";

const peraturanSettingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul harus diinput"],
    },
    description: {
      type: String,
      required: [true, "Deskripsi harus diinput"],
    },
    file: {
      type: String,
      required: [true, "File harus diinput"],
    },
  },
  {
    timestamps: true,
  }
);

const PeraturanSetting = mongoose.model(
  "PeraturanSetting",
  peraturanSettingSchema
);

export default PeraturanSetting;
