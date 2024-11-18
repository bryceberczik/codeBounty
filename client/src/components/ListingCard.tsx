import { Card, Button } from "react-bootstrap";
import "../css/listingcard.css";

interface ListingCardProps {
  title: string;
  poster: string;
  description: string;
  price: number;
}

const ListingCard = ({
  title,
  poster,
  description,
  price,
}: ListingCardProps) => {
  return (
    <div className="listing-card-container" style={{ position: "relative" }}>
      <Card id="listing-card">
        <Card.Body>
          <Card.Title id="card-title">{title}</Card.Title>
          <Card.Subtitle id="card-lister" className="mb-2">
            Posted by: {poster}
          </Card.Subtitle>
          <Card.Text id="card-description">
            <h3 className="desc-tag">Description: </h3>
            {description}
          </Card.Text>
          <Card.Text id="card-price">
          <h3 className="price-tag">${price.toLocaleString()}</h3>
          </Card.Text>
        </Card.Body>
      </Card>

      <Button id="apply-button">Apply</Button>
    </div>
  );
};

export default ListingCard;
