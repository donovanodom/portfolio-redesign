import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import BlogFilterCard from "./BlogFilterCard";

const BlogFilterContainer = ({ activeLang, langs, setActiveLang }) => {
  return (
    <DropdownButton
      className="blog-filter-container"
      id="dropdown-basic-button"
      title={activeLang}
    >
      {langs?.map((lang, index) => (
        <BlogFilterCard
          key={index}
          lang={lang}
          active={activeLang === lang}
          onClick={() => setActiveLang(lang)}
        />
      ))}
    </DropdownButton>
  );
};

export default BlogFilterContainer;
