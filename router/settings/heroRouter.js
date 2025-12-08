import express from "express";
import multer from "multer";
import {
  CreateHero,
  AllHero,
  DetailHero,
  UpdateHero,
  DeleteHero,
} from "../../controllers/settings/heroController.js";
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

const uploadImage = multer({ storage: fileStorage, fileFilter }).single(
  "image"
);

const router = express.Router();

// post /api/v1/settings/hero
router.post("/", uploadImage, authMiddleware, CreateHero);

// get /api/v1/settings/hero
router.get("/", authMiddleware, AllHero);

// get /api/v1/settings/hero/:id
router.get("/:id", authMiddleware, DetailHero);

// put /api/v1/settings/hero
router.put("/:id", uploadImage, authMiddleware, UpdateHero);

// delete /api/v1/settings/hero
router.delete("/:id", authMiddleware, DeleteHero);

export default router;
