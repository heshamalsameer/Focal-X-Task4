import { Container } from "react-bootstrap";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import styles from "./Contact.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Contect = () => {
  return (
    <div className={`${styles.contact}`}>
      <HeaderSection
        title="Contact"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <iframe
        className={`${styles.iframe} mt-5 w-100`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"
      ></iframe>
      <Container className="py-5">
        <Row className="justify-content-between justify-content-sm-center gap-3">
          <Col className="justify-content-sm-center" xs={12} md={5}>
            <Row className=" justify-content-sm-between">
              <Col
                sm={12}
                className={`${styles.contactCol} shadow-sm text-center rounded pt-3 mb-2`}
              >
                <CiLocationOn className={`${styles.contactIcon}`} />
                <h6>Address</h6>
                <p>A 108 Adam Street,New York,NY 535322</p>
              </Col>
              <Col
                sm={5}
                className={`${styles.contactCol} shadow-sm text-center rounded pt-3`}
              >
                <IoIosCall className={`${styles.contactIcon}`} />
                <h6>Call Us</h6>
                <p>+1 5589 5548 55</p>
              </Col>
              <Col
                sm={5}
                className={`${styles.contactCol} shadow-sm text-center rounded pt-3`}
              >
                <TfiEmail className={`${styles.contactIcon}`} />
                <h6>Email Us</h6>
                <p>info@example.com</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className={styles.contactCol}>
            <Row className=" justify-content-sm-between  p-4">
              <Col sm={6} className="mb-3">
                <Form.Control
                  className="rounded-0"
                  placeholder="Your Name..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Col>
              <Col sm={6}>
                <Form.Control
                  className="rounded-0"
                  placeholder="Your Email..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Col>
              <Col sm={12} className="mb-3">
                <Form.Control
                  className="rounded-0"
                  placeholder="Subject..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Col>
              <Col sm={12}>
                <Form.Control
                  className="rounded-0"
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Message..."
                />
              </Col>
              <Col sm={12} className="text-center mt-3">
                <Button className={styles.sendButton}>Send Message</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
