import mongoose, { Schema } from "mongoose";

const heroSettingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul harus diinput"],
    },
    description: {
      type: String,
      required: [true, "Deskripsi harus diinput"],
    },
    image: {
      type: String,
      required: [true, "Deskripsi harus diinput"],
    },
  },
  {
    timestamps: true,
  }
);

const HeroSetting = mongoose.model("HeroSetting", heroSettingSchema);

export default HeroSetting;
