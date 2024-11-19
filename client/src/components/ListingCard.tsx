import { Card, Button } from "react-bootstrap";
import "../css/listingcard.css";

interface Listing {
  _id: string;
  title: string;
  userId: string;
  description: string;
  price: number;
}

interface ListingCardProps {
  listings: Listing[];
}

const ListingCard: React.FC<ListingCardProps> = ({ listings }) => {

  if (!listings.length) {
    return <h3>No Listings Yet</h3>;
  }

  return (
    <div className="listings-tab">
      {listings &&
        listings.map((listing) => (
          <div
            key={listing._id}
            className="listing-card-container"
            style={{ position: "relative" }}
          >
            <Card id="listing-card">
              <Card.Body>
                <Card.Title className="card-title">{listing.title}</Card.Title>
                <Card.Subtitle className="card-lister mb-2">
                  Posted by: {listing.userId}
                </Card.Subtitle>
                <Card.Text id="card-description">
                  <h3 className="desc-tag">Description: </h3>
                  {listing.description}
                </Card.Text>
                <Card.Text id="card-price">
                  <h3 className="price-tag">${listing.price}</h3>
                </Card.Text>
              </Card.Body>
            </Card>

            <Button id="apply-button">Apply</Button>
          </div>
        ))}
    </div>
  );
};

export default ListingCard;
