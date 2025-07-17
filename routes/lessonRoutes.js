const express = require("express");
const router = express.Router();
const { addLesson } = require("../controllers/lessonController");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/", requireAuth, addLesson); // Only logged-in users (admin) can add

module.exports = router;
