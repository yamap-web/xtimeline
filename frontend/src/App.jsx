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
      <h1>Recent Tweets</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
