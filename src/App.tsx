import { useState, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { createSearchParams, useNavigate } from "react-router-dom";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  const navi = useNavigate();

  function Post(id) {
    navi({
      pathname: "/SinglePost",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  }

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setAllUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      {allUsers.map((item) => (
        <Card className="text-center">
          <img src="https://svgsilh.com/svg/659651-ffffff.svg" alt="" />
          <div>User Id :{item.userId}</div>
          <Card.Header className="title">{item.title}</Card.Header>
          <hr></hr>
          <Card.Body className="details">{item.body}</Card.Body>
          <button
            id={item.id}
            onClick={(e) => {
              var id = e.target.id;
              Post(id);
            }}
          >
            View Post
          </button>
        </Card>
      ))}
    </div>
  );
}

export default App;
