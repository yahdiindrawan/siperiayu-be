import express from "express";

import {
  CreateSosialMedia,
  AllSosialMedia,
  DetailSosialMedia,
  UpdateSosialMedia,
  DeleteSosialMedia,
} from "../../controllers/settings/sosialMediaController.js";

import { authMiddleware } from "../../middleware/authMiddleware.js";

const router = express.Router();

// POST
router.post("/", authMiddleware, CreateSosialMedia);

// GET ALL
router.get("/", authMiddleware, AllSosialMedia);

// GET DETAIL
router.get("/:id", authMiddleware, DetailSosialMedia);

// UPDATE
router.put("/:id", authMiddleware, UpdateSosialMedia);

// DELETE
router.delete("/:id", authMiddleware, DeleteSosialMedia);

export default router;
