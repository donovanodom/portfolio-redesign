import { Col, Container, Row } from "react-bootstrap";

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
          <div className="header-links">
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
