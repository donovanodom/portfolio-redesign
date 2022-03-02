import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import BlogFilterCard from "./BlogFilterCard";

const BlogFilterContainer = ({ activeLang, langs, setActiveLang }) => {
  return (
    <div className="blog-filter-container">
      <h4 style={{ float: "left" }}>Filter by category</h4>
      <DropdownButton id="dropdown-basic-button" title={activeLang}>
        {langs?.map((lang, index) => (
          <BlogFilterCard
            key={index}
            lang={lang}
            active={activeLang === lang}
            onClick={() => setActiveLang(lang)}
          />
        ))}
      </DropdownButton>
    </div>
  );
};

export default BlogFilterContainer;
