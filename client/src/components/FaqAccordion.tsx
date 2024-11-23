import Accordion from "react-bootstrap/Accordion";
import "../css/faqaccordion.css";

interface IFaqAccordionProps {
  title: string;
  description: string;
}

const FaqAccordion = ({ title, description }: IFaqAccordionProps) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqAccordion;
