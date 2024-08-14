const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

let tweets = [
  {
    content: "𝕏連携アプリのテスト中 #ZeroPlus",
    link: "https://x.com/yamap_web/status/1823382175577948183",
  },
];

app.use(cors());
app.use(express.json());

app.post("/api/new-tweet", (req, res) => {
  const tweetData = req.body;
  tweets.push(tweetData);
  res.status(200).send("Tweet received");
});

app.get("/api/tweets", (req, res) => {
  res.json(tweets);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
