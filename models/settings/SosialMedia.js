import mongoose from "mongoose";

const sosialMediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama sosial media harus diinput"],
      trim: true,
    },
    url: {
      type: String,
      required: [true, "Link sosial media harus diinput"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const SosialMedia = mongoose.model("SosialMedia", sosialMediaSchema);

export default SosialMedia;
