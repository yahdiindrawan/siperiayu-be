import express from "express";
import {
  CreateIndeksLokalitas,
  AllIndeksLokalitas,
  DetailIndeksLokalitas,
  UpdateIndeksLokalitas,
  DeleteIndeksLokalitas,
} from "../../controllers/indeks/indeksLokalitasController.js";
import {
  authMiddleware,
  permissionUser,
} from "../../middleware/authMiddleware.js";

const router = express.Router();

// post /api/v1/indeks-lokalitas
router.post("/", authMiddleware, CreateIndeksLokalitas);

// get /api/v1/indeks-lokalitas
router.get("/", authMiddleware, AllIndeksLokalitas);

// get /api/v1/indeks-lokalitas/:id
router.get("/:id", authMiddleware, DetailIndeksLokalitas);

// put /api/v1/indeks-lokalitas
router.put("/:id", authMiddleware, UpdateIndeksLokalitas);

// delete /api/v1/indeks-lokalitas
router.delete("/:id", authMiddleware, DeleteIndeksLokalitas);

export default router;
