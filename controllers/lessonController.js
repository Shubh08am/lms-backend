const Lesson = require("../models/Lesson");
const Course = require("../models/Course");
const Progress = require("../models/Progress");

exports.addLesson = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, content, videoUrl } = req.body;

    const lesson = await Lesson.create({ course: courseId, title, content, videoUrl });

    await Course.findByIdAndUpdate(courseId, {
      $push: { lessons: lesson._id }
    });

    res.status(201).json({ message: "Lesson added successfully", lesson });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const userId = req.user?.userId; // only if auth middleware is used

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    // ✅ Mark as completed if user is authenticated
    if (userId) {
      const filter = { user: userId, course: lesson.course };
      const update = { $addToSet: { completedLessons: lessonId } }; // prevent duplicates
      await Progress.findOneAndUpdate(filter, update, { upsert: true });
    }

    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
