import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <h1 className="fw-bold">#ZeroPlus</h1>
      <div className="d-flex flex-column gap-2 mt-4">
        {tweets.map((tweet, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Body>
              <Card.Text>{tweet.content}</Card.Text>
              <Card.Link href={tweet.link}>Link to Tweet</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
