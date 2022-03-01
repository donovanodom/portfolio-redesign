import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const BlogCard = ({ link, title, description }) => {
  const cardStyle = {
    width: "16rem",
    height: "300px",
    margin: "10px 0"
  };
  const bodyStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "6",
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  };
  const titleStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  };
  return (
    <Col>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title style={titleStyle}>{title}</Card.Title>
          <Card.Text style={bodyStyle}>{description}</Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
