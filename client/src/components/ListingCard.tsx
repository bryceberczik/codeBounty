import Card from "react-bootstrap/Card";
import "../css/listingcard.css";

const ListingCard = () => {
  return (
    <div>
      <Card id="listing-card">
        <Card.Body>
          <Card.Title id="card-title">Hello World</Card.Title>
          <Card.Subtitle id="card-lister" className="mb-2">
            Posted by: Username
          </Card.Subtitle>
          <Card.Text id="card-description">
            <strong>Description: </strong>This is where the listing description
            goes.
          </Card.Text>
          <Card.Text id="card-price">
            <strong>$100</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListingCard;
