const Quiz = require("../models/Quiz");
const QuizAttempt = require("../models/QuizAttempt");

exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quizId = req.params.id;
    const userId = req.user.userId;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (q.correctIndex === answers[idx]) {
        score++;
      }
    });

    const attempt = await QuizAttempt.create({
      user: userId,
      quiz: quizId,
      answers,
      score
    });

    res.json({ message: "Quiz submitted", score, total: quiz.questions.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getUserAttempts = async (req, res) => {
  try {
    const userId = req.user.userId;
    const attempts = await QuizAttempt.find({ user: userId })
      .populate("quiz")
      .sort({ attemptedAt: -1 });

    res.json(attempts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
