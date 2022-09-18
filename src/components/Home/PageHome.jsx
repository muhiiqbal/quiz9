import axios from "axios";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const PageHome = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(`${API}`);
        console.log(data);
        setComments(data);
      } catch (e) {
        //
      }
    };
    getComments();
  }, []);
  return (
    <Container>
      <h1 className="m-4 text-center">Programmatic Navigation React</h1>
      {comments?.map((comment) => (
        <Card className="m-2 text-center">
          <Card.Header>{comment.id}</Card.Header>
          <Card.Body>
            <Card.Text>userId : {comment.userId}</Card.Text>
            <Card.Text>id : {comment.id}</Card.Text>
            <Card.Text>title: {comment.title}</Card.Text>
            <Card.Text>body : {comment.body}</Card.Text>
            <Button variant="primary" onClick={() => navigate(`${comment.id}`)}>
              Show Comment
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default PageHome;