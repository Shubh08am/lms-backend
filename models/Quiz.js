const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],           // Array of options (A, B, C, D)
  correctIndex: Number        // Index of the correct option
});

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  questions: [questionSchema]
});

module.exports = mongoose.model("Quiz", quizSchema);
