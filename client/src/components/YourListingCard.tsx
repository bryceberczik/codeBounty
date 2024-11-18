import { Card, Button } from "react-bootstrap";
import "../css/listingcard.css";

interface ListingCardProps {
  title: string;
  poster: string;
  description: string;
  price: number;
}

const YourListingCard = ({
  title,
  poster,
  description,
  price,
}: ListingCardProps) => {
  return (
    <div style={{ position: "relative" }}>
      <Card className="listing-card">
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Subtitle className="card-lister mb-2">
            Posted by: {poster}
          </Card.Subtitle>
          <Card.Text className="card-description">
            <strong>Description: </strong>
            {description}
          </Card.Text>
          <Card.Text className="card-price">
            <strong>${price}</strong>
          </Card.Text>
          <div id="listing-buttons-container">
            <Button id="view-applicants-button">View Applicants</Button>
            <Button id="delete-listing-button">Delete Listing</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default YourListingCard;
