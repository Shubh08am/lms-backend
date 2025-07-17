const Quiz = require("../models/Quiz");
const Course = require("../models/Course");

exports.addQuiz = async (req, res) => {
  const { id } = req.params;
  const { title, questions } = req.body;

  try {
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.quizzes.push({ title, questions });
    await course.save();

    res.status(201).json({ message: "Quiz added" });
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
