import { BsGithub, BsMedium, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const icon = {
    position: "relative",
    bottom: "2px"
  };
  return (
    <div className="contact">
      <h1>Stay in contact!</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li className="contact-list">
          <a href="https://github.com/donovanodom">
            <BsGithub style={icon} /> Github{" "}
          </a>
        </li>
        <li className="contact-list">
          <a href="https://donovanodom.medium.com/">
            <BsMedium style={icon} /> Medium
          </a>
        </li>
        <li className="contact-list">
          <a href="https://www.linkedin.com/in/donovanodom/">
            <BsLinkedin style={icon} /> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
