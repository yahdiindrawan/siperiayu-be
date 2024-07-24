import Ketinggian from "../../models/data-master/Ketinggian.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateKetinggian = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const newKetinggian = await Ketinggian.create({
    category,
    indeks,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newKetinggian,
  });
});

export const AllKetinggian = asyncHandler(async (req, res) => {
  const KetinggianData = await Ketinggian.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: KetinggianData,
  });
});

export const DetailKetinggian = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const KetinggianData = await Ketinggian.findById(id);

  if (!KetinggianData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: KetinggianData,
  });
});

export const UpdateKetinggian = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const id = req.params.id;

  const KetinggianData = await Ketinggian.findById(id);

  if (!KetinggianData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  KetinggianData.category = category;
  KetinggianData.indeks = indeks;

  await KetinggianData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: KetinggianData,
  });
});

export const DeleteKetinggian = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const KetinggianData = await Ketinggian.findById(id);

  if (!KetinggianData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await Ketinggian.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
