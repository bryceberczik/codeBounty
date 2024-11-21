import { Card, Button } from "react-bootstrap";
import "../css/listingcard.css";

interface Listing {
  _id: string;
  title: string;
  userId: string;
  description: string;
  price: number;
}

interface User {
  _id: string;
  username: string;
}

interface ListingCardProps {
  listings: Listing[];
  users: User[];
  onApply: (listingId: string) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listings, users, onApply }) => {

  const getUsername = (userId: string) => {
    const user = users.find((user) => user._id === userId);
    return user ? user.username : "Unknown User";
  };

  if (!listings.length) {
    return <h3 style={{ textAlign: "center" }}>No Listings Yet</h3>;
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
                  Posted by: {getUsername(listing.userId)}
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

            <Button onClick={() => onApply (
              listing._id
            )} id="apply-button">Apply</Button>
          </div>
        ))}
    </div>
  );
};

export default ListingCard;
