import IndeksBGTerbangun from "../../models/indeks/IndeksBGTerbangun.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateIndeksBGTerbangun = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const newIndeksBGTerbangun = await IndeksBGTerbangun.create({
    category,
    indeks,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newIndeksBGTerbangun,
  });
});

export const AllIndeksBGTerbangun = asyncHandler(async (req, res) => {
  const IndeksBGTerbangunData = await IndeksBGTerbangun.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: IndeksBGTerbangunData,
  });
});

export const DetailIndeksBGTerbangun = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const IndeksBGTerbangunData = await IndeksBGTerbangun.findById(id);

  if (!IndeksBGTerbangunData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: IndeksBGTerbangunData,
  });
});

export const UpdateIndeksBGTerbangun = asyncHandler(async (req, res) => {
  const { category, indeks } = req.body;
  const id = req.params.id;

  const IndeksBGTerbangunData = await IndeksBGTerbangun.findById(id);

  if (!IndeksBGTerbangunData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  IndeksBGTerbangunData.category = category;
  IndeksBGTerbangunData.indeks = indeks;

  await IndeksBGTerbangunData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: IndeksBGTerbangunData,
  });
});

export const DeleteIndeksBGTerbangun = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const IndeksBGTerbangunData = await IndeksBGTerbangun.findById(id);

  if (!IndeksBGTerbangunData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await IndeksBGTerbangun.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
