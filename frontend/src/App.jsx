import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("https://xtimeline.onrender.com/api/tweets")
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tweets!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>#ZeroPlus の投稿</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            <a href={tweet.link}>{tweet.content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
