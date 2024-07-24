import FungsiBangunan from "../../models/data-master/FungsiBangunan.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateFungsiBangunan = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const newFungsiBangunan = await FungsiBangunan.create({
    category,
    indeks,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newFungsiBangunan,
  });
});

export const AllFungsiBangunan = asyncHandler(async (req, res) => {
  const FungsiBangunanData = await FungsiBangunan.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: FungsiBangunanData,
  });
});

export const DetailFungsiBangunan = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const FungsiBangunanData = await FungsiBangunan.findById(id);

  if (!FungsiBangunanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: FungsiBangunanData,
  });
});

export const UpdateFungsiBangunan = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const id = req.params.id;

  const FungsiBangunanData = await FungsiBangunan.findById(id);

  if (!FungsiBangunanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  FungsiBangunanData.category = category;
  FungsiBangunanData.indeks = indeks;

  await FungsiBangunanData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: FungsiBangunanData,
  });
});

export const DeleteFungsiBangunan = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const FungsiBangunanData = await FungsiBangunan.findById(id);

  if (!FungsiBangunanData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await FungsiBangunan.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
