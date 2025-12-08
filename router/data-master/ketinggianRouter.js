import express from "express";
import {
  CreateKetinggian,
  AllKetinggian,
  DetailKetinggian,
  UpdateKetinggian,
  DeleteKetinggian,
} from "../../controllers/data-master/ketinggianController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/fungsi-bangunan
router.post("/", authMiddleware, CreateKetinggian);

// get /api/v1/fungsi-bangunan
router.get("/", AllKetinggian);

// get /api/v1/fungsi-bangunan/:id
router.get("/:id", authMiddleware, DetailKetinggian);

// put /api/v1/fungsi-bangunan
router.put("/:id", authMiddleware, UpdateKetinggian);

// delete /api/v1/fungsi-bangunan
router.delete("/:id", authMiddleware, DeleteKetinggian);

export default router;
