const Quiz = require("../models/Quiz");
const Course = require("../models/Course");

// ✅ Add Quiz to a Course
exports.addQuiz = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, questions } = req.body;

    const quiz = await Quiz.create({ course: courseId, title, questions });

    await Course.findByIdAndUpdate(courseId, {
      $push: { quizzes: quiz._id }
    });

    res.status(201).json({ message: "Quiz added successfully", quiz });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
