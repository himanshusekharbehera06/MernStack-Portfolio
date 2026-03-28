import Review from "../models/Review.js";

// CREATE REVIEW
export const createReview = async (req, res) => {
  try {
    const { name, role, message, rating } = req.body;

    if (!name || !role || !message || !rating) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newReview = await Review.create({
      name,
      role,
      message,
      rating,
      approved: true,
    });

    console.log("✅ Review Saved:", newReview);

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: newReview,
    });
  } catch (error) {
    console.error("❌ Create Review Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while submitting review",
    });
  }
};

// GET REVIEWS
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    console.log("📦 Reviews Fetched:", reviews);

    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error("❌ Fetch Reviews Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching reviews",
    });
  }
};

// GET ALL REVIEWS
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error("❌ Fetch All Reviews Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching all reviews",
    });
  }
};

// DELETE REVIEW
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Review.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete Review Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting review",
    });
  }
};