import express from "express";
import multer from "multer";
import {
  CreatePeraturan,
  AllPeraturan,
  DetailPeraturan,
  UpdatePeraturan,
  DeletePeraturan,
} from "../../controllers/settings/peraturanController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, "files");
    } else {
      cb(null, "images");
    }
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadFile = multer({ storage: fileStorage, fileFilter }).single("file");

const router = express.Router();

// post /api/v1/settings/peraturan
router.post("/", uploadFile, authMiddleware, CreatePeraturan);

// get /api/v1/settings/peraturan
router.get("/", authMiddleware, AllPeraturan);

// get /api/v1/settings/peraturan/:id
router.get("/:id", authMiddleware, DetailPeraturan);

// put /api/v1/settings/peraturan
router.put("/:id", uploadFile, authMiddleware, UpdatePeraturan);

// delete /api/v1/settings/peraturan
router.delete("/:id", authMiddleware, DeletePeraturan);

export default router;
