import Permanensi from "../../models/data-master/Permanensi.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreatePermanensi = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const newPermanensi = await Permanensi.create({
    category,
    indeks,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newPermanensi,
  });
});

export const AllPermanensi = asyncHandler(async (req, res) => {
  const PermanensiData = await Permanensi.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: PermanensiData,
  });
});

export const DetailPermanensi = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const PermanensiData = await Permanensi.findById(id);

  if (!PermanensiData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: PermanensiData,
  });
});

export const UpdatePermanensi = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const id = req.params.id;

  const PermanensiData = await Permanensi.findById(id);

  if (!PermanensiData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  PermanensiData.category = category;
  PermanensiData.indeks = indeks;

  await PermanensiData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: PermanensiData,
  });
});

export const DeletePermanensi = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const PermanensiData = await Permanensi.findById(id);

  if (!PermanensiData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await Permanensi.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
