import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Header = () => {
  return (
    <Container className="header" fluid>
      <Row>
        <Col className="header-info">
          <h1>Donovan Odom</h1>
          <h2>Full Stack Web Developer</h2>
        </Col>
        <Col sm={12} md={6} className="header-image">
          <img alt="Donovan Odom" src="https://i.imgur.com/18uiSHy.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
