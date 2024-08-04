import IndeksBGTerbangunPrasarana from "../../models/indeks/IndeksBGPrasarana.js";
import asyncHandler from "../../middleware/asyncHandler.js";

export const CreateIndeksBGTerbangunPrasarana = asyncHandler(
  async (req, res) => {
    const { category, indeks } = req.body;
    const newIndeksBGTerbangunPrasarana =
      await IndeksBGTerbangunPrasarana.create({
        category,
        indeks,
      });

    return res.status(200).json({
      message: "Data berhasil ditambah",
      data: newIndeksBGTerbangunPrasarana,
    });
  }
);

export const AllIndeksBGTerbangunPrasarana = asyncHandler(async (req, res) => {
  const IndeksBGTerbangunPrasaranaData =
    await IndeksBGTerbangunPrasarana.find();

  return res.status(200).json({
    message: "Data berhasil ditampilkan",
    data: IndeksBGTerbangunPrasaranaData,
  });
});

export const DetailIndeksBGTerbangunPrasarana = asyncHandler(
  async (req, res) => {
    const id = req.params.id;
    const IndeksBGTerbangunPrasaranaData =
      await IndeksBGTerbangunPrasarana.findById(id);

    if (!IndeksBGTerbangunPrasaranaData) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Data berhasil ditampilkan",
      data: IndeksBGTerbangunPrasaranaData,
    });
  }
);

export const UpdateIndeksBGTerbangunPrasarana = asyncHandler(
  async (req, res) => {
    const { category, indeks } = req.body;
    const id = req.params.id;

    const IndeksBGTerbangunPrasaranaData =
      await IndeksBGTerbangunPrasarana.findById(id);

    if (!IndeksBGTerbangunPrasaranaData) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    IndeksBGTerbangunPrasaranaData.category = category;
    IndeksBGTerbangunPrasaranaData.indeks = indeks;

    await IndeksBGTerbangunPrasaranaData.save();

    return res.status(200).json({
      message: "Data berhasil diubah",
      data: IndeksBGTerbangunPrasaranaData,
    });
  }
);

export const DeleteIndeksBGTerbangunPrasarana = asyncHandler(
  async (req, res) => {
    const id = req.params.id;

    const IndeksBGTerbangunPrasaranaData =
      await IndeksBGTerbangunPrasarana.findById(id);

    if (!IndeksBGTerbangunPrasaranaData) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    await IndeksBGTerbangunPrasarana.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Data berhasil dihapus",
    });
  }
);
