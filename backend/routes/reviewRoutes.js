import express from "express";
import {
  createReview,
  getApprovedReviews,
  getAllReviews,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", createReview);
router.get("/", getApprovedReviews);
router.get("/all", getAllReviews);
router.delete("/:id", deleteReview);

export default router