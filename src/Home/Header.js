import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Header = () => {
  return (
    <Container className="header" fluid>
      <Row>
        <Col>1 of 1</Col>
        <Col className="header-image">
          <img alt="Donovan Odom" src="https://i.imgur.com/cvDRlyh.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
