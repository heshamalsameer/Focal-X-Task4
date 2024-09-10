import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FooterSection } from "../../components/footerSection/FooterSection";
import { FaRegCopyright } from "react-icons/fa6";

const links = [
  {
    title: "Useful Links",
    content: [
      "Home",
      "About us",
      "Services",
      "Terms of service",
      "Privacy policy",
    ],
  },
  {
    title: "Our Services",
    content: [
      "Web Design",
      "Web Developer",
      "Product Managment",
      "Marketing",
      "Graphic Design",
    ],
  },
  {
    title: "Hic Solutasetp ",
    content: [
      "Molestiae accusamus iure",
      "Excepturi disnissimos",
      "Suscipit distinctio",
      "Dilecta",
      "Sit quas consectetur",
    ],
  },
  {
    title: "Nobis illum",
    content: ["Ipsam", "Laudantium dolorum", "Dinera", "Trodelas", "Flexo"],
  },
];
export const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <Container className={` py-5`}>
        <Row>
          <Col xs={6} md={4}>
            <h1 className="mb-4 ">Medicio</h1>
            <p>
              A108 Adam Street
              <br />
              New York,NY 534468{" "}
            </p>
            <p>
              <span className={styles.phone}>Phone: </span>15233 65566 333
              <br />
              <span className={styles.phone}>Email: </span>aaa@gmail.com
            </p>

            <Row>
              <Col>
                {" "}
                <FaXTwitter className={`${styles.contactIcon}`} />
              </Col>
              <Col>
                {" "}
                <FaFacebook className={`${styles.contactIcon}`} />
              </Col>
              <Col>
                {" "}
                <FaInstagram className={`${styles.contactIcon}`} />
              </Col>
              <Col>
                {" "}
                <FaLinkedin className={`${styles.contactIcon}`} />
              </Col>
            </Row>
          </Col>
          {links.map((item, index) => {
            return (
              <Col key={index} xs={6} md={3} lg={2}>
                <FooterSection links={item} />
              </Col>
            );
          })}
        </Row>
        <hr />
        <p className="text-center">
          <FaRegCopyright className="me-1" />
          Copyright <span className={styles.phone}>Medicio</span> All Right
          Reserved <br /> Design by{" "}
          <span className={styles.bootstarap}>BootstrapMade</span>
        </p>
      </Container>
    </div>
  );
};
