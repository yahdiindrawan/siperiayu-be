import express from "express";
import {
  CreateKlasifikasi,
  AllKlasifikasi,
  DetailKlasifikasi,
  UpdateKlasifikasi,
  DeleteKlasifikasi,
} from "../../controllers/kalkulator/klasifikasiController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/kalkulator/klasifikasi
router.post("/", authMiddleware, CreateKlasifikasi);

// get /api/v1/kalkulator/klasifikasi
router.get("/", authMiddleware, AllKlasifikasi);

// get /api/v1/kalkulator/klasifikasi/:id
router.get("/:id", authMiddleware, DetailKlasifikasi);

// put /api/v1/kalkulator/klasifikasi
router.put("/:id", authMiddleware, UpdateKlasifikasi);

// delete /api/v1/kalkulator/klasifikasi
router.delete("/:id", authMiddleware, DeleteKlasifikasi);

export default router;
