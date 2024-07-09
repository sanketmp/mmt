import express from "express";
import { getBooking, createBooking } from "../controllers/bookingcontroller.js";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getBooking);
router.post("/", createBooking);

export default router;
