import express from "express";
import {
  CreateIndeksBGTerbangunPrasarana,
  AllIndeksBGTerbangunPrasarana,
  DetailIndeksBGTerbangunPrasarana,
  UpdateIndeksBGTerbangunPrasarana,
  DeleteIndeksBGTerbangunPrasarana,
} from "../../controllers/indeks/indeksBGTerbangunPrasaranaController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/indeks-bg-terbangun-prasarana
router.post("/", authMiddleware, CreateIndeksBGTerbangunPrasarana);

// get /api/v1/indeks-bg-terbangun-prasarana
router.get("/", authMiddleware, AllIndeksBGTerbangunPrasarana);

// get /api/v1/indeks-bg-terbangun-prasarana/:id
router.get("/:id", authMiddleware, DetailIndeksBGTerbangunPrasarana);

// put /api/v1/indeks-bg-terbangun-prasarana
router.put("/:id", authMiddleware, UpdateIndeksBGTerbangunPrasarana);

// delete /api/v1/indeks-bg-terbangun-prasarana
router.delete("/:id", authMiddleware, DeleteIndeksBGTerbangunPrasarana);

export default router;
