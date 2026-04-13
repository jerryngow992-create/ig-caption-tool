const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ 让前端文件可以被访问
app.use(express.static(__dirname));

// ✅ 首页返回 index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API
app.post("/generate", (req, res) => {
  const { topic } = req.body;

  res.json({
    caption: `✨ ${topic}

今天值得被记录。
#AI #Instagram`
  });
});

// Render 必须用这个 PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});