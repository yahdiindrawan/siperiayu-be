import Klasifikasi from "../../models/kalkulator/Klasifikasi.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateKlasifikasi = asyncHandler(async (req, res) => {
  const { classification, weight } = req.body;
  const newKlasifikasi = await Klasifikasi.create({
    classification,
    weight,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newKlasifikasi,
  });
});

export const AllKlasifikasi = asyncHandler(async (req, res) => {
  const KlasifikasiData = await Klasifikasi.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: KlasifikasiData,
  });
});

export const DetailKlasifikasi = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const KlasifikasiData = await Klasifikasi.findById(id);

  if (!KlasifikasiData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: KlasifikasiData,
  });
});

export const UpdateKlasifikasi = asyncHandler(async (req, res) => {
  const { classification, weight } = req.body;
  const id = req.params.id;

  const KlasifikasiData = await Klasifikasi.findById(id);

  if (!KlasifikasiData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  KlasifikasiData.classification = classification;
  KlasifikasiData.weight = weight;

  await KlasifikasiData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: KlasifikasiData,
  });
});

export const DeleteKlasifikasi = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const KlasifikasiData = await Klasifikasi.findById(id);

  if (!KlasifikasiData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await Klasifikasi.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
