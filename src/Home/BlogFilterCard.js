import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const BlogFilterCard = ({ lang, active, onClick }) => {
  return (
    <Dropdown.Item
      className="blog-filter-card"
      onClick={onClick}
      id={active ? "blog-filter-card-select" : null}
    >
      {lang}
    </Dropdown.Item>
  );
};

export default BlogFilterCard;
