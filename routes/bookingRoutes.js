import express from "express";
import {
  createBooking,
  getBookingByUser,
  getAllBookings
} from "../controllers/bookingController.js";
import { verifyAdmin, verifyUser } from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/addBooking", createBooking);
//router.post("/addBooking",verifyUser, createBooking);
router.post("/getBookingByUser", getBookingByUser);
//router.post("/getBookingByUser",verifyUser, getBookingByUser);
router.post("/allBookings",getAllBookings);
//router.post("/allBookings",verifyAdmin ,getAllBookings);

export default router;
