const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/authMiddleware");
const {
  markLessonComplete,
  getCompletedLessons
} = require("../controllers/progressController");

router.post("/complete", requireAuth, markLessonComplete);
router.get("/completed", requireAuth, getCompletedLessons);

module.exports = router;
