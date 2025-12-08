import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Hero from "../../models/settings/Hero.js";
import asyncHandler from "../../middleware/asyncHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CreateHero = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(422).json({
      message: "Gambar harus diupload",
    });
  }
  const { title, description } = req.body;
  const image = req.file.path;
  const newHero = await Hero.create({
    title,
    description,
    image,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newHero,
  });
});

export const AllHero = asyncHandler(async (req, res) => {
  const HeroData = await Hero.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: HeroData,
  });
});

export const DetailHero = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const HeroData = await Hero.findById(id);

  if (!HeroData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: HeroData,
  });
});

export const UpdateHero = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;

  const HeroData = await Hero.findById(id);

  if (!HeroData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  HeroData.title = title;
  HeroData.description = description;

  let image;
  if (req.file) {
    image = req.file.path;
    removeImage(HeroData.image);
    HeroData.image = image;
  }

  await HeroData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: HeroData,
  });
});

export const DeleteHero = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const HeroData = await Hero.findById(id);

  if (!HeroData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }
  removeImage(HeroData.image);
  await Hero.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});

const removeImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
