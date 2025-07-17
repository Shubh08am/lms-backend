const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseById,
  enrollInCourse,
  addQuiz
} = require("../controllers/courseController");

const requireAuth = require("../middlewares/authMiddleware");

router.post("/", requireAuth, createCourse); // Admin can add
router.get("/", getAllCourses); // Public
router.get("/:id", getCourseById); // Public
router.post("/:id/enroll", requireAuth, enrollInCourse); // Protected
router.post('/:id/quizzes', requireAuth, addQuiz);
router.post('/:id/lessons', requireAuth, addLesson);

module.exports = router;
