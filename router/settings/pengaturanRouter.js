import express from "express";

import {
  CreatePengaturan,
  AllPengaturan,
  DetailPengaturan,
  UpdatePengaturan,
  DeletePengaturan,
} from "../../controllers/settings/pengaturanController.js";

import { authMiddleware } from "../../middleware/authMiddleware.js";

const router = express.Router();

// POST
router.post("/", authMiddleware, CreatePengaturan);

// GET ALL
router.get("/", authMiddleware, AllPengaturan);

// GET DETAIL
router.get("/:id", authMiddleware, DetailPengaturan);

// UPDATE
router.put("/:id", authMiddleware, UpdatePengaturan);

// DELETE
router.delete("/:id", authMiddleware, DeletePengaturan);

export default router;
