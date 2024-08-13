import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://yourdomain.com/api/tweets");
    eventSource.onmessage = function (event) {
      const newTweet = JSON.parse(event.data);
      setTweets((prevTweets) => [newTweet, ...prevTweets]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <ul>
      {tweets.map((tweet, index) => (
        <li key={index}>{tweet.text}</li>
      ))}
    </ul>
  );
}

export default App;
