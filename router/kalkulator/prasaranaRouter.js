import express from "express";
import {
  CreatePrasarana,
  AllPrasarana,
  DetailPrasarana,
  UpdatePrasarana,
  DeletePrasarana,
} from "../../controllers/kalkulator/prasaranaController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/kalkulator/prasarana
router.post("/", authMiddleware, CreatePrasarana);

// get /api/v1/kalkulator/prasarana
router.get("/", AllPrasarana);

// get /api/v1/kalkulator/prasarana/:id
router.get("/:id", authMiddleware, DetailPrasarana);

// put /api/v1/kalkulator/prasarana
router.put("/:id", authMiddleware, UpdatePrasarana);

// delete /api/v1/kalkulator/prasarana
router.delete("/:id", authMiddleware, DeletePrasarana);

export default router;
