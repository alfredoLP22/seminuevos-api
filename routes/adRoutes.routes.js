import { Router } from "express";
import { publishAd } from "../controllers/adController.js";

const router = Router();

// Ruta para publicar un anuncio
router.post("/publish", publishAd);

export default router;
