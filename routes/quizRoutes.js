const express = require("express");
const router = express.Router();
const { addQuiz, getQuiz } = require("../controllers/quizController");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/", requireAuth, addQuiz);       // Add quiz to course
router.get("/:id", requireAuth, getQuiz);     // View a quiz by ID

module.exports = router;
