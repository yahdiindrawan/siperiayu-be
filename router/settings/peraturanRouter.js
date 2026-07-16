import express from "express";
import multer from "multer";
import {
  CreatePeraturan,
  AllPeraturan,
  DetailPeraturan,
  UpdatePeraturan,
  DeletePeraturan,
} from "../../controllers/settings/peraturanController.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Format file tidak didukung"), false);
  }
};

const uploadFile = multer({
  storage: multer.memoryStorage(), // ← berubah dari diskStorage
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // tetap bisa dibatasi 2 MB
  },
}).single("file");

const router = express.Router();

router.post("/", authMiddleware, uploadFile, CreatePeraturan);
router.get("/", AllPeraturan);
router.get("/:id", DetailPeraturan);
router.put("/:id", authMiddleware, uploadFile, UpdatePeraturan);
router.delete("/:id", authMiddleware, DeletePeraturan);

export default router;
