import FaktorKepemilikan from "../../models/data-master/FaktorKepemilikan.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateFaktorKepemilikan = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const newFaktorKepemilikan = await FaktorKepemilikan.create({
    category,
    indeks,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newFaktorKepemilikan,
  });
});

export const AllFaktorKepemilikan = asyncHandler(async (req, res) => {
  const FaktorKepemilikanData = await FaktorKepemilikan.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: FaktorKepemilikanData,
  });
});

export const DetailFaktorKepemilikan = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const FaktorKepemilikanData = await FaktorKepemilikan.findById(id);

  if (!FaktorKepemilikanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: FaktorKepemilikanData,
  });
});

export const UpdateFaktorKepemilikan = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const id = req.params.id;

  const FaktorKepemilikanData = await FaktorKepemilikan.findById(id);

  if (!FaktorKepemilikanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  FaktorKepemilikanData.category = category;
  FaktorKepemilikanData.indeks = indeks;

  await FaktorKepemilikanData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: FaktorKepemilikanData,
  });
});

export const DeleteFaktorKepemilikan = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const FaktorKepemilikanData = await FaktorKepemilikan.findById(id);

  if (!FaktorKepemilikanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await FaktorKepemilikan.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
