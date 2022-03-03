import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="header" fluid>
      <Row>
        <Col className="header-info">
          <div className="header-links">
            <div>About</div>
            <div>Projects</div>
          </div>
          <h1>DONOVAN ODOM</h1>
          <img
            className="logo"
            alt="logo"
            src="https://i.imgur.com/t9KskKr.png"
          />
          <div className="header-links">
            <div>
              <Link className="header-link" to="/blog">
                Blog
              </Link>
            </div>
            <div>Contact</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
