const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/new-tweet", (req, res) => {
  const tweetData = req.body;
  // データベースに保存する処理や、リアルタイムでフロントエンドに送信する処理を実装
  console.log(tweetData);
  res.status(200).send("Received");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
