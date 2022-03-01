import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const BlogCard = ({ image, link, title, description }) => {
  const cardStyle = {
    width: "16rem",
    height: "480px",
    margin: "10px auto"
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
  const imageStyle = {
    height: "180px"
  };
  return (
    <Col>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={image} style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>{title}</Card.Title>
          <Card.Text style={bodyStyle}>{description}</Card.Text>
          <Button href={link} variant="primary">
            Read more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
