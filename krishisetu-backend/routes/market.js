import { Router } from "express";
import { getMarketPrices, getNetRealization } from "../controllers/marketController.js";
import auth from "../middleware/auth.js";

const router = Router();

// @route   GET /api/market/prices
// @desc    Get market prices for district and commodity
router.get("/prices", auth, getMarketPrices);

// @route   GET /api/market/net-realization
// @desc    Calculate net realization comparison (mandi vs buyer vs FPO)
router.get("/net-realization", auth, getNetRealization);

export default router;
