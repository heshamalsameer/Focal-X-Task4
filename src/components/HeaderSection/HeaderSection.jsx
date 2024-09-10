import styles from "./HeaderSecton.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export const HeaderSection = ({ title, description }) => {
  return (
    <>
      <Container>
        <Row className="justify-content-center pt-3">
          <Col xs="auto fs-3">{title}</Col>
        </Row>
        <Row className="justify-content-center pt-2">
          <Col xs="auto">
            {" "}
            <span
              className={`${styles.line} position-absolute start-50 translate-middle-x  `}
            ></span>
          </Col>
        </Row>
        <Row className="justify-content-center pt-2">
          <Col xs="auto text-center">{description}</Col>
        </Row>
      </Container>
    </>
  );
};
