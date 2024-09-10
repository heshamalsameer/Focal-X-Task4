import React from "react";
import Card from "react-bootstrap/Card";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa6";
import { HiMiniBeaker } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import "./AboutCard.css";
const AboutCard = () => {
  return (
    <div className="container d-flex flex-wrap gap-3 my-5  ">
      <Card className=" py-1 px-4 shadow w-aboutcard d-flex flex-row justify-content-center align-items-center">
        <FaUserDoctor size={40} className="text-maincolor " />
        <Card.Body>
          <Card.Title className="fw-bolder fs-1">25</Card.Title>
          <Card.Text className="fs-5">Doctor</Card.Text>
        </Card.Body>
      </Card>
      <Card className="py-1 px-4 shadow w-aboutcard d-flex flex-row justify-content-center align-items-center">
        <FaRegHospital size={40} className="text-maincolor " />
        <Card.Body>
          <Card.Title className="fw-bolder fs-1">15</Card.Title>
          <Card.Text className="fs-5">Depatrments</Card.Text>
        </Card.Body>
      </Card>
      <Card className="py-1 px-4 shadow w-aboutcard d-flex flex-row justify-content-center align-items-center">
        <HiMiniBeaker size={40} className="text-maincolor " />
        <Card.Body>
          <Card.Title className="fw-bolder fs-1">8</Card.Title>
          <Card.Text className="fs-5">Research Labs</Card.Text>
        </Card.Body>
      </Card>
      <Card className="py-1 px-4 shadow w-aboutcard d-flex flex-row justify-content-center align-items-center">
        <SlBadge size={40} className="text-maincolor " />
        <Card.Body>
          <Card.Title className="fw-bolder fs-1">150</Card.Title>
          <Card.Text className="fs-5">Awards</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutCard;
