const mongoose = require("mongoose");

const lessonProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("LessonProgress", lessonProgressSchema);
