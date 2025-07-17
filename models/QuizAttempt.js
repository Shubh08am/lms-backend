const mongoose = require("mongoose");

const quizAttemptSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  answers: [Number], // array of selected option indexes
  score: Number,
  attemptedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);
