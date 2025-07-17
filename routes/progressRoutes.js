const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/authMiddleware");
const {
  markLessonComplete,
  getCompletedLessons,
  getProgress
} = require("../controllers/progressController");

// ✅ Updated to accept lesson ID from URL
router.post("/complete/:id", requireAuth, markLessonComplete);

// 🧾 Get completed lessons for user
router.get("/completed", requireAuth, getCompletedLessons);

// 📊 Get overall progress for a course
router.get("/:id", requireAuth, getProgress); // course ID

module.exports = router;
