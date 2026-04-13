

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// API
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/generate", (req, res) => {
  const { topic } = req.body;

  console.log("收到请求:", topic);

  res.json({
    caption: `✨ ${topic}

今天的生活值得被记录。
#AI #Instagram`
  });
});

// PORT（Render + 本地都适用）
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});