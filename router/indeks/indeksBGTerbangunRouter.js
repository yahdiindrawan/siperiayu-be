import express from "express";
import {
  CreateIndeksBGTerbangun,
  AllIndeksBGTerbangun,
  DetailIndeksBGTerbangun,
  UpdateIndeksBGTerbangun,
  DeleteIndeksBGTerbangun,
} from "../../controllers/indeks/indeksBGTerbangunController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/indeks-bg-terbangun
router.post("/", authMiddleware, CreateIndeksBGTerbangun);

// get /api/v1/indeks-bg-terbangun
router.get("/", authMiddleware, AllIndeksBGTerbangun);

// get /api/v1/indeks-bg-terbangun/:id
router.get("/:id", authMiddleware, DetailIndeksBGTerbangun);

// put /api/v1/indeks-bg-terbangun
router.put("/:id", authMiddleware, UpdateIndeksBGTerbangun);

// delete /api/v1/indeks-bg-terbangun
router.delete("/:id", authMiddleware, DeleteIndeksBGTerbangun);

export default router;
