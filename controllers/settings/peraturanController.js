import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Peraturan from "../../models/settings/Peraturan.js";
import asyncHandler from "../../middleware/asyncHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CreatePeraturan = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(422).json({
      message: "File harus diupload",
    });
  }
  const { title, description } = req.body;
  const file = req.file.path;
  const newPeraturan = await Peraturan.create({
    title,
    description,
    file,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newPeraturan,
  });
});

export const AllPeraturan = asyncHandler(async (req, res) => {
  const PeraturanData = await Peraturan.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: PeraturanData,
  });
});

export const DetailPeraturan = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const PeraturanData = await Peraturan.findById(id);

  if (!PeraturanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: PeraturanData,
  });
});

export const UpdatePeraturan = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;

  const PeraturanData = await Peraturan.findById(id);

  if (!PeraturanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  PeraturanData.title = title;
  PeraturanData.description = description;

  let file;
  if (req.file) {
    file = req.file.path;
    removeFile(PeraturanData.file);
    PeraturanData.file = file;
  }

  await PeraturanData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: PeraturanData,
  });
});

export const DeletePeraturan = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const PeraturanData = await Peraturan.findById(id);

  if (!PeraturanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }
  removeFile(PeraturanData.file);
  await Peraturan.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});

const removeFile = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
