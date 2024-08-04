import IndeksLokalitas from "../../models/indeks/IndeksLokalitas.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateIndeksLokalitas = asyncHandler(async (req, res) => {
  const { value } = req.body;
  const newIndeksLokalitas = await IndeksLokalitas.create({
    value,
  });

  return res.status(200).json({
    message: "Data berhasil ditambah",
    data: newIndeksLokalitas,
  });
});

export const AllIndeksLokalitas = asyncHandler(async (req, res) => {
  const IndeksLokalitasData = await IndeksLokalitas.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: IndeksLokalitasData,
  });
});

export const DetailIndeksLokalitas = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const IndeksLokalitasData = await IndeksLokalitas.findById(id);

  if (!IndeksLokalitasData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: IndeksLokalitasData,
  });
});

export const UpdateIndeksLokalitas = asyncHandler(async (req, res) => {
  const { value } = req.body;
  const id = req.params.id;

  const IndeksLokalitasData = await IndeksLokalitas.findById(id);

  if (!IndeksLokalitasData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  IndeksLokalitasData.value = value;

  await IndeksLokalitasData.save();

  return res.status(200).json({
    message: "Data berhasil diubah",
    data: IndeksLokalitasData,
  });
});

export const DeleteIndeksLokalitas = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const IndeksLokalitasData = await IndeksLokalitas.findById(id);

  if (!IndeksLokalitasData) {
    return res.status(404).json({
      message: "Data tidak ditemukan",
    });
  }

  await IndeksLokalitas.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Data berhasil dihapus",
  });
});
