import express from "express";
import {
  CreateFaktorKepemilikan,
  AllFaktorKepemilikan,
  DetailFaktorKepemilikan,
  UpdateFaktorKepemilikan,
  DeleteFaktorKepemilikan,
} from "../../controllers/data-master/faktorKepemilikanController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/fungsi-bangunan
router.post("/", authMiddleware, CreateFaktorKepemilikan);

// get /api/v1/fungsi-bangunan
router.get("/", authMiddleware, AllFaktorKepemilikan);

// get /api/v1/fungsi-bangunan/:id
router.get("/:id", authMiddleware, DetailFaktorKepemilikan);

// put /api/v1/fungsi-bangunan
router.put("/:id", authMiddleware, UpdateFaktorKepemilikan);

// delete /api/v1/fungsi-bangunan
router.delete("/:id", authMiddleware, DeleteFaktorKepemilikan);

export default router;
