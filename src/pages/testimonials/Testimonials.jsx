import styles from "./Testimonials.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";

import testimonials1 from "../../assets/testimonials/testimonials-1.jpg";
import testimonials2 from "../../assets/testimonials/testimonials-2.jpg";
import testimonials3 from "../../assets/testimonials/testimonials-3.jpg";
import testimonials4 from "../../assets/testimonials/testimonials-4.jpg";
import testimonials5 from "../../assets/testimonials/testimonials-5.jpg";
import { TestimonialCard } from "../../components/testimonials/TestimonialCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const testimonials = [
  {
    name: "Jena Karlis",
    job: "Store Owner",
    img: testimonials1,
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex",
  },
  {
    name: "Matt Brandon",
    job: "Enterpreneur",
    img: testimonials2,
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex",
  },
  {
    name: "Johan Larson",
    job: "Freelancer",
    img: testimonials5,
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex ",
  },
  {
    name: "Johan Larson",
    job: "Freelancer",
    img: testimonials3,
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex ",
  },
  {
    name: "Johan Larson",
    job: "Freelancer",
    img: testimonials4,
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-5">
      <Container>
        <HeaderSection
          title="Testimonials"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <Carousel
          className="d-none d-lg-block testmi  "
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          // indicators={false}
        >
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[0]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[1]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[2]} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <TestimonialCard className="m-0" item={testimonials[3]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[4]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[1]} />
              </Col>
            </Row>
          </Carousel.Item>

          {/* <TestimonialCard item={testimonials[0]} /> */}
        </Carousel>
        <Carousel
          className="d-block d-lg-none testmi "
          activeIndex={index}
          onSelect={handleSelect}
          interval={5000}
          // indicators={false}
        >
          <Carousel.Item className="mx-auto">
            <TestimonialCard className="mb-4" item={testimonials[0]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[1]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[2]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[3]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[4]} />
          </Carousel.Item>

          {/* <TestimonialCard item={testimonials[0]} /> */}
        </Carousel>
      </Container>
    </div>
  );
};
