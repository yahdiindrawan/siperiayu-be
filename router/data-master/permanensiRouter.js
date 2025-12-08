import express from "express";
import {
  CreatePermanensi,
  AllPermanensi,
  DetailPermanensi,
  UpdatePermanensi,
  DeletePermanensi,
} from "../../controllers/data-master/permanensiController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/fungsi-bangunan
router.post("/", authMiddleware, CreatePermanensi);

// get /api/v1/fungsi-bangunan
router.get("/", AllPermanensi);

// get /api/v1/fungsi-bangunan/:id
router.get("/:id", authMiddleware, DetailPermanensi);

// put /api/v1/fungsi-bangunan
router.put("/:id", authMiddleware, UpdatePermanensi);

// delete /api/v1/fungsi-bangunan
router.delete("/:id", authMiddleware, DeletePermanensi);

export default router;
