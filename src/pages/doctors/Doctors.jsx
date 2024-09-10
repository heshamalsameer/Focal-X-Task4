import styles from "./Doctors.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { Col, Container, Row } from "react-bootstrap";
import doctor1 from ".././../assets/doctors/doctors-1.jpg";
import doctor2 from ".././../assets/doctors/doctors-2.jpg";
import doctor3 from ".././../assets/doctors/doctors-3.jpg";
import doctor4 from ".././../assets/doctors/doctors-4.jpg";
import { DoctorCard } from "../../components/doctors/DoctorCard";

const doctors = [
  {
    name: "Walter White",
    specialty: "Chief Medical Officer",
    img: doctor1,
  },
  {
    name: "Sarah Jhonson",
    specialty: "Anesthesiologist",
    img: doctor2,
  },
  {
    name: "William Anderson",
    specialty: "Cardialogy",
    img: doctor3,
  },
  {
    name: "Amanda Jepson",
    specialty: "Neursurgeon",
    img: doctor4,
  },
];

export const Doctors = () => {
  return (
    <div className={`${styles.doctors} py-5`}>
      <HeaderSection
        title="Doctors"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <Container>
        <Row>
          {doctors.map((item, index) => {
            return (
              <Col key={index} className="mt-3" md={4} lg={3}>
                <DoctorCard doctor={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
