const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/authMiddleware");
const {
  submitQuiz,
  getUserAttempts
} = require("../controllers/quizAttemptController");

router.post("/:id/submit", requireAuth, submitQuiz);
router.get("/my", requireAuth, getUserAttempts); // 👈 New route

module.exports = router;
