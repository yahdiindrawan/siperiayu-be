import express from "express";
import {
  CreateKompleksitas,
  AllKompleksitas,
  DetailKompleksitas,
  UpdateKompleksitas,
  DeleteKompleksitas,
} from "../../controllers/data-master/kompleksitasController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/fungsi-bangunan
router.post("/", authMiddleware, CreateKompleksitas);

// get /api/v1/fungsi-bangunan
router.get("/", authMiddleware, AllKompleksitas);

// get /api/v1/fungsi-bangunan/:id
router.get("/:id", authMiddleware, DetailKompleksitas);

// put /api/v1/fungsi-bangunan
router.put("/:id", authMiddleware, UpdateKompleksitas);

// delete /api/v1/fungsi-bangunan
router.delete("/:id", authMiddleware, DeleteKompleksitas);

export default router;
