const express = require("express");
const router = express.Router();
const { addLesson } = require("../controllers/lessonController");
const requireAuth = require("../middlewares/authMiddleware");
const Lesson = require("../models/Lesson"); // ✅ At top of file

router.post("/", requireAuth, addLesson); // Only logged-in users (admin) can add

router.get("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
