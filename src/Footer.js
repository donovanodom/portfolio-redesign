import { BsGithub, BsMedium, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const icon = {
    position: "relative",
    bottom: "2px",
    display: "inline"
  };
  return (
    <ul className="footer">
      <li className="contact-list">
        <a href="https://github.com/donovanodom">
          <BsGithub style={icon} /> Github{" "}
        </a>
      </li>
      <li className="contact-list">
        <a href="https://donovanodom.medium.com/">
          <BsMedium style={icon} /> Medium{" "}
        </a>
      </li>
      <li className="contact-list">
        <a href="https://www.linkedin.com/in/donovanodom/">
          <BsLinkedin style={icon} /> LinkedIn{" "}
        </a>
      </li>
    </ul>
  );
};

export default Footer;
