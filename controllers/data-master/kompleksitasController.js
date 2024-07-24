import Kompleksitas from "../../models/data-master/Kompleksitas.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateKompleksitas = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const newKompleksitas = await Kompleksitas.create({
    category,
    indeks,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newKompleksitas,
  });
});

export const AllKompleksitas = asyncHandler(async (req, res) => {
  const KompleksitasData = await Kompleksitas.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: KompleksitasData,
  });
});

export const DetailKompleksitas = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const KompleksitasData = await Kompleksitas.findById(id);

  if (!KompleksitasData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: KompleksitasData,
  });
});

export const UpdateKompleksitas = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const id = req.params.id;

  const KompleksitasData = await Kompleksitas.findById(id);

  if (!KompleksitasData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  KompleksitasData.category = category;
  KompleksitasData.indeks = indeks;

  await KompleksitasData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: KompleksitasData,
  });
});

export const DeleteKompleksitas = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const KompleksitasData = await Kompleksitas.findById(id);

  if (!KompleksitasData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await Kompleksitas.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
