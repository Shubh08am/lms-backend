const LessonProgress = require("../models/LessonProgress");

exports.markLessonComplete = async (req, res) => {
  try {
    const { lessonId } = req.body;
    const userId = req.user.userId;

    const progress = await LessonProgress.findOneAndUpdate(
      { user: userId, lesson: lessonId },
      { completed: true, completedAt: new Date() },
      { upsert: true, new: true }
    );

    res.json({ message: "Lesson marked as completed", progress });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompletedLessons = async (req, res) => {
  try {
    const userId = req.user.userId;
    const progress = await LessonProgress.find({ user: userId, completed: true }).populate("lesson");
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
