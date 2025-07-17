const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String }, // ✅ Add this line
  videoUrl: { type: String },
  resources: [String],
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

module.exports = mongoose.model("Lesson", lessonSchema);
