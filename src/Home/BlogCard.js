import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const BlogCard = ({ image, link, title, description }) => {
  const bodyStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  };
  const titleStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  };
  const imageStyle = {
    position: "absolute",
    height: "200px",
    width: "200px",
    objectFit: "cover"
  };
  return (
    <Col>
      <Card className="blog-card">
        <Card.Img variant="top" src={image} style={imageStyle} />
        <Card.Body style={{ marginLeft: "200px", textAlign: "left" }}>
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
