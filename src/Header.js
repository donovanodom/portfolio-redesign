import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };
  return (
    <div className={active ? "header" : "header-hide"} fluid>
      {active ? (
        <BsX id="menu-toggle" onClick={toggle} />
      ) : (
        <BsList id="menu-toggle" onClick={toggle} />
      )}
      <div>
        <div className="header-info">
          <div className={active ? "header-links" : "header-links-hide"}>
            <div>
              <Link onClick={toggle} className="header-link" to="/">
                Home
              </Link>
            </div>
            <div onClick={toggle} className="header-link">
              Projects
            </div>
            <Link id="do" className="header-logo-link" to="/">
              <h1> DONOVAN ODOM </h1>
            </Link>
            <Link onClick={toggle} className="header-logo-link" to="/">
              <img
                className="logo"
                alt="logo"
                src="https://i.imgur.com/t9KskKr.png"
              />
            </Link>
            <div>
              <Link onClick={toggle} className="header-link" to="/blog">
                Blog
              </Link>
            </div>
            <div>
              <Link onClick={toggle} className="header-link" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
