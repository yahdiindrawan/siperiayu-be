import express from "express";
import {
  CreateFungsiBangunan,
  AllFungsiBangunan,
  DetailFungsiBangunan,
  UpdateFungsiBangunan,
  DeleteFungsiBangunan,
} from "../../controllers/fungsiBangunanController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/fungsi-bangunan
router.post("/", authMiddleware, CreateFungsiBangunan);

// get /api/v1/fungsi-bangunan
router.get("/", authMiddleware, AllFungsiBangunan);

// get /api/v1/fungsi-bangunan/:id
router.get("/:id", authMiddleware, DetailFungsiBangunan);

// put /api/v1/fungsi-bangunan
router.put("/:id", authMiddleware, UpdateFungsiBangunan);

// delete /api/v1/fungsi-bangunan
router.delete("/:id", authMiddleware, DeleteFungsiBangunan);

export default router;
