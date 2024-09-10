import { Col, Container, Row } from "react-bootstrap";
import { HeaderSection } from "../HeaderSection/HeaderSection";
import styles from "./ServiceCard.module.css";
import { FaHeartbeat } from "react-icons/fa";

export const ServicCard = ({ title, description, icon }) => {
  return (
    <div>
      <div className="text-center mt-4 ">{icon()}</div>
      <Container>
        <Row className="justify-content-center pt-3">
          <Col xs="auto fs-4">{title}</Col>
        </Row>
        <Row className="justify-content-center pt-2">
          <Col xs="auto">
            {" "}
            <span
              className={`${styles.line} position-absolute translate-middle-x  `}
            ></span>
          </Col>
        </Row>
        <Row className="justify-content-center pt-2">
          <Col xs="auto text-center">{description}</Col>
        </Row>
      </Container>
    </div>
  );
};
