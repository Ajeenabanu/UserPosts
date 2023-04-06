import Card from "react-bootstrap/Card";
import "./Singlepost.css";
import { useState, useEffect } from "react";
import "./App";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

function SinglePost() {
  const navi = useNavigate();

  function toBack() {
    navi("/");
  }

  const [post, setPost] = useState([]);
  const [SearchParams] = useSearchParams();

  const fetchData = async () => {
    let id = SearchParams.get("id");

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="card">
        <Card className="text-center">
          <img src="https://svgsilh.com/svg/659651-ffffff.svg" alt="" />
          <div>User Id : {post.userId} </div>
          <Card.Header className="title">{post.title}</Card.Header>
          <hr></hr>
          <Card.Body className="details">{post.body}</Card.Body>
          <div>Post Id : {post.id} </div>
        </Card>
        <button onClick={toBack}>Back</button>
      </div>
    </div>
  );
}

export default SinglePost;
