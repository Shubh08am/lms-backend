const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseById,
  enrollInCourse,
} = require("../controllers/courseController");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/", requireAuth, createCourse); // Admin can add
router.get("/", getAllCourses); // Public
router.get("/:id", getCourseById); // Public
router.post("/:id/enroll", requireAuth, enrollInCourse); // Protected

module.exports = router;
