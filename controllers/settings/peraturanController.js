import Peraturan from "../../models/settings/Peraturan.js";
import asyncHandler from "../../middleware/asyncHandler.js";
import { deleteFile, uploadFile } from "../../utils/blob.js";

export const CreatePeraturan = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(422).json({
      message: "File harus diupload",
    });
  }
  const { title, description } = req.body;
  const file = await uploadFile(req.file);
  const newPeraturan = await Peraturan.create({
    title,
    description,
    file: file.pathname,
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
    await deleteFile(PeraturanData.file);
    const file = await uploadFile(req.file);
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
  await deleteFile(PeraturanData.file);
  await Peraturan.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
