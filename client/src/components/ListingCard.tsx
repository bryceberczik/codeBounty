import Card from "react-bootstrap/Card";
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
    <Card id="listing-card">
      <Card.Body>
        <Card.Title id="card-title">{title}</Card.Title>
        <Card.Subtitle id="card-lister" className="mb-2">
          Posted by: {poster}
        </Card.Subtitle>
        <Card.Text id="card-description">
          <strong>Description: </strong>
          {description}
        </Card.Text>
        <Card.Text id="card-price">
          <strong>${price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ListingCard;
