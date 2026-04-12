const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/generate", (req, res) => {
  const { topic } = req.body;

  const caption = `
✨ ${topic}

今天的生活值得被记录。
简单，但有力量。

#生活 #日常 #instagram
`;

  res.json({ caption });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});