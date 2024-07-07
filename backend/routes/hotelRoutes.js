import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelcontroller.js";
import Hotel from "../models/hotelmodel.js";//
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);

router.get("/", getHotels);
router.get("/countByCity", countByCity);

//Not needed
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
