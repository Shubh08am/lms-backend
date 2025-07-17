const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourseById,
  enrollInCourse
} = require("../controllers/courseController");

const { addQuiz } = require("../controllers/quizController");   // ✅ Import addQuiz from quizController
const { addLesson } = require("../controllers/lessonController"); // ✅ Import addLesson from lessonController

const requireAuth = require("../middlewares/authMiddleware");

router.post("/", requireAuth, createCourse);             // Admin: Create course
router.get("/", getAllCourses);                          // Public: Get all courses
router.get("/:id", getCourseById);                       // Public: Get one course
router.post("/:id/enroll", requireAuth, enrollInCourse); // User enroll
router.post('/:id/quizzes', requireAuth, addQuiz);       // Admin: Add quiz
router.post('/:id/lessons', requireAuth, addLesson);     // Admin: Add lesson

module.exports = router;
