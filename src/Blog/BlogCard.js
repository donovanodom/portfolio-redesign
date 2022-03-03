import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import moment from "moment";

const BlogCard = ({ link, title, image, date, author }) => {
  const titleStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    fontSize: "18px",
    fontWeight: "800",
    textAlign: "left"
  };
  return (
    <Col sm={12} xxl={6}>
      <Card className="blog-card">
        <Card.Body className="blog-body">
          <Card.Img className="blog-image" src={image} />
          <div className="blog-details">
            <Card.Title style={titleStyle}>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href={link}
              >
                {title}
              </a>
            </Card.Title>
            <div>{moment(date).format("MMMM Do YYYY")}</div>
            <div>
              by:{" "}
              <a
                style={{ color: "inherit" }}
                href="https://donovanodom.medium.com/"
              >
                {author}
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
