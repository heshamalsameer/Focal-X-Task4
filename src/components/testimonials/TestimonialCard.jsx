import styles from "./Testimonial.module.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { SiComma } from "react-icons/si";

export const TestimonialCard = ({ item }) => {
  return (
    <>
      <Card
        className={`${styles.testimonial} my-5 border-0`}
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Card.Text>
            {/* <span className={`${styles.qot}`}>،،</span> */}
            <SiComma className={styles.firstcomm} />
            <SiComma className={styles.firstcomm} />
            {"  "}
            {item.opinion}
            {"   "}
            <SiComma className={styles.comm} />
            <SiComma className={styles.comm} />
          </Card.Text>
          <Image
            className={`${styles.img} position-absolute`}
            src={item.img}
            roundedCircle
          />
          <h6 className={`${styles.name} position-absolute`}>{item.name}</h6>
          <p className={`${styles.job} position-absolute`}>{item.job}</p>
        </Card.Body>
      </Card>
    </>
  );
};
