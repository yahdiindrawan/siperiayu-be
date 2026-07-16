import SosialMedia from "../../models/settings/SosialMedia.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateSosialMedia = asyncHandler(async (req, res) => {
  const { name, url } = req.body;

  const sosialMedia = await SosialMedia.create({
    name,
    url,
  });

  return res.status(201).json({
    message: "Data berhasil ditambah",
    data: sosialMedia,
  });
});

export const AllSosialMedia = asyncHandler(async (req, res) => {
  const sosialMedia = await SosialMedia.find().sort({ createdAt: -1 });

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: sosialMedia,
  });
});

export const DetailSosialMedia = asyncHandler(async (req, res) => {
  const data = await SosialMedia.findById(req.params.id);

  if (!data) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data,
  });
});

export const UpdateSosialMedia = asyncHandler(async (req, res) => {
  const { name, url } = req.body;

  const data = await SosialMedia.findById(req.params.id);

  if (!data) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  data.name = name;
  data.url = url;

  await data.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data,
  });
});

export const DeleteSosialMedia = asyncHandler(async (req, res) => {
  const data = await SosialMedia.findById(req.params.id);

  if (!data) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await SosialMedia.findByIdAndDelete(req.params.id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
