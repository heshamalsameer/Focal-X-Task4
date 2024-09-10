import Card from "react-bootstrap/Card";

export const DoctorCard = ({ doctor }) => {
  return (
    <Card>
      <Card.Img variant="top" src={doctor.img} />
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Text>{doctor.specialty}</Card.Text>
      </Card.Body>
    </Card>
  );
};
