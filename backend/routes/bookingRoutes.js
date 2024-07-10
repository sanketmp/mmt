import express from "express";
import {
  getBooking,
  createBooking,
  deleteBooking,
} from "../controllers/bookingcontroller.js";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getBooking);
router.post("/", createBooking);
router.delete("/:id", deleteBooking);

export default router;
