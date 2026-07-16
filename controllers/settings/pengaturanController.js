import asyncHandler from "../../middleware/asyncHandler.js";
import Pengaturan from "../../models/settings/Pengaturan.js";

export const CreatePengaturan = asyncHandler(async (req, res) => {
  const { key, value } = req.body;

  const pengaturan = await Pengaturan.create({
    key,
    value,
  });

  return res.status(201).json({
    message: "Data berhasil ditambah",
    data: pengaturan,
  });
});

export const AllPengaturan = asyncHandler(async (req, res) => {
  const pengaturan = await Pengaturan.find().sort({ createdAt: -1 });

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: pengaturan,
  });
});

export const DetailPengaturan = asyncHandler(async (req, res) => {
  const data = await Pengaturan.findById(req.params.id);

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

export const UpdatePengaturan = asyncHandler(async (req, res) => {
  const { key, value } = req.body;

  const data = await Pengaturan.findById(req.params.id);

  if (!data) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  data.key = key;
  data.value = value;

  await data.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data,
  });
});

export const DeletePengaturan = asyncHandler(async (req, res) => {
  const data = await Pengaturan.findById(req.params.id);

  if (!data) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await Pengaturan.findByIdAndDelete(req.params.id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
