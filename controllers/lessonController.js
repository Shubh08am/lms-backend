const Lesson = require("../models/Lesson");
const Course = require("../models/Course");

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