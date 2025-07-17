const Lesson = require("../models/Lesson");
const Course = require("../models/Course");

exports.addLesson = async (req, res) => {
  const { id } = req.params;
  const { title, content, videoUrl } = req.body;

  try {
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.lessons.push({ title, content, videoUrl });
    await course.save();

    res.status(201).json({ message: "Lesson added" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
