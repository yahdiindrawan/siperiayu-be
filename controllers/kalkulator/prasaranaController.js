import Prasarana from "../../models/kalkulator/Prasarana.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreatePrasarana = asyncHandler(async (req, res) => {
  const {
    category,
    building,
    satuan,
    hspbg,
    satuan_prasarana,
    charge,
    maksimum_per_unit,
  } = req.body;
  const newPrasarana = await Prasarana.create({
    category,
    building,
    satuan,
    hspbg,
    satuan_prasarana,
    charge,
    maksimum_per_unit,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newPrasarana,
  });
});

export const AllPrasarana = asyncHandler(async (req, res) => {
  const PrasaranaData = await Prasarana.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: PrasaranaData,
  });
});

export const DetailPrasarana = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const PrasaranaData = await Prasarana.findById(id);

  if (!PrasaranaData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: PrasaranaData,
  });
});

export const UpdatePrasarana = asyncHandler(async (req, res) => {
  const {
    category,
    building,
    satuan,
    hspbg,
    satuan_prasarana,
    charge,
    maksimum_per_unit,
  } = req.body;
  const id = req.params.id;

  const PrasaranaData = await Prasarana.findById(id);

  if (!PrasaranaData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  PrasaranaData.category = category;
  PrasaranaData.building = building;
  PrasaranaData.satuan = satuan;
  PrasaranaData.hspbg = hspbg;
  PrasaranaData.satuan_prasarana = satuan_prasarana;
  PrasaranaData.charge = charge;
  PrasaranaData.maksimum_per_unit = maksimum_per_unit;

  await PrasaranaData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: PrasaranaData,
  });
});

export const DeletePrasarana = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const PrasaranaData = await Prasarana.findById(id);

  if (!PrasaranaData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await Prasarana.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
