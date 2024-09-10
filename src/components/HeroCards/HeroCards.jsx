import React from "react";
import Card from "react-bootstrap/Card";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaCapsules } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { FaDna } from "react-icons/fa";
import "./HeroCards.css";
const HeroCards = () => {
  return (
    <div className=" container d-flex gap-3 flex-wrap justify-content-center my-5 ">
      <Card className="px-1 py-5 shadow w-card">
        <BsHeartPulseFill
          size={30}
          className="text-maincolor ms-4"
          style={{ color: "aqua" }}
        />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text className="fs-s">
            Voluptatum deleniti atque corrpti quos dolores et quas molestias
            excepturi
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="px-1 py-5 shadow w-card ">
        <FaCapsules
          size={30}
          className="text-maincolor ms-4"
          style={{ color: "aqua" }}
        />
        <Card.Body>
          <Card.Title>Sed ut perspici</Card.Title>
          <Card.Text className="fs-s">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="px-1 py-5 shadow w-card ">
        <BiSolidInjection
          size={30}
          className="text-maincolor ms-4"
          style={{ color: "aqua" }}
        />
        <Card.Body>
          <Card.Title>Magni Dolores</Card.Title>
          <Card.Text className="fs-s">
            Excepteur sint occaecat cupidatat non proident,sunt in culpa qui
            officia
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="px-1 py-5 shadow w-card ">
        <FaDna
          size={30}
          className="text-maincolor ms-4"
          style={{ color: "aqua" }}
        />
        <Card.Body>
          <Card.Title>Nemo Enim</Card.Title>
          <Card.Text className="fs-s">
            At vero eos et accusamus et iusto odio dignessimos ducimus qui
            blanditiis
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroCards;
