import { Container } from "react-bootstrap";
import styles from "./Questions.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import Accordion from "react-bootstrap/Accordion";

const accor = [
  {
    title: "Non consectetur a erat nam at lectus urna duis?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa dolore ut porro voluptatum voluptas laboriosam natus, molestiae laudantium vel officiis illo quisquam eius quae? Adipisci magni ipsum enim suscipit.",
  },
  {
    title: "Feuglat sceierisque varlus morbi enim nunc fauclbus?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa dolore ut porro voluptatum voluptas laboriosam natus, molestiae laudantium vel officiis illo quisquam eius quae? Adipisci magni ipsum enim suscipit.",
  },
  {
    title: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa dolore ut porro voluptatum voluptas laboriosam natus, molestiae laudantium vel officiis illo quisquam eius quae? Adipisci magni ipsum enim suscipit.",
  },
  {
    title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa dolore ut porro voluptatum voluptas laboriosam natus, molestiae laudantium vel officiis illo quisquam eius quae? Adipisci magni ipsum enim suscipit.",
  },
  {
    title: "Tempus quam pellentwsque nec nam aliquam sem et tortor?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa dolore ut porro voluptatum voluptas laboriosam natus, molestiae laudantium vel officiis illo quisquam eius quae? Adipisci magni ipsum enim suscipit.",
  },
  {
    title: "Perspiciatis quod quos nulla quo illum ullam?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa dolore ut porro voluptatum voluptas laboriosam natus, molestiae laudantium vel officiis illo quisquam eius quae? Adipisci magni ipsum enim suscipit.",
  },
];

export const Questions = () => {
  return (
    <div className={`${styles.questions}`}>
      <Container>
        <HeaderSection
          title="Frequently Asked Questions"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />

        <Accordion className="pt-4 pb-5">
          {accor.map((item, index) => {
            return (
              <Accordion.Item className="my-2" key={index} eventKey={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
};
