import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const BlogCard = ({ link, title, description }) => {
  const bodyStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "4",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    margin: "0",
    lineHeight: "22px"
  };
  const titleStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  };
  return (
    <Col>
      <Card className="blog-card">
        <Card.Body style={{ marginRight: "31px", textAlign: "left" }}>
          <Card.Title style={titleStyle}>{title}</Card.Title>
          <Card.Text style={bodyStyle}>{description}</Card.Text>
          <Button
            className="blog-button"
            href={link}
            variant="primary"
            size="sm"
          >
            Read more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
