const Lesson = require("../models/Lesson");
const Course = require("../models/Course");

exports.addLesson = async (req, res) => {
  try {
    const { courseId, title, videoUrl, resources } = req.body;

    const lesson = await Lesson.create({
      title,
      videoUrl,
      resources,
      course: courseId
    });

    await Course.findByIdAndUpdate(courseId, {
      $push: { lessons: lesson._id }
    });

    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
