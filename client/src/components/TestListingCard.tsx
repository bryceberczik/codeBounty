import { Card } from "react-bootstrap";

interface TestListingProps {
  title: string;
  poster: string;
  description: string;
  price: number;
}

const TestListingCard = ({
  title,
  poster,
  description,
  price,
}: TestListingProps) => {
  return (
    <div className="listing-card-container" style={{ position: "relative" }}>
      <Card id="listing-card">
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Subtitle className="card-lister mb-2">
            Posted by: {[poster]}
          </Card.Subtitle>
          <Card.Text id="card-description">
            <h3 className="desc-tag">Description: </h3>
            {description}
          </Card.Text>
          <Card.Text id="card-price">
            <h3 className="price-tag">${price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestListingCard;
