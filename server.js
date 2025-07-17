const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("LMS Backend API is Running 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);

const lessonRoutes = require("./routes/lessonRoutes");
app.use("/api/lessons", lessonRoutes);

const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);

const quizAttemptRoutes = require("./routes/quizAttemptRoutes");
app.use("/api/quiz-attempts", quizAttemptRoutes);

const progressRoutes = require("./routes/progressRoutes");
app.use("/api/progress", progressRoutes);

app.use("/lessons", require("./routes/lessonRoutes"));

app.use("/api/progress", require("./routes/progressRoutes"));

