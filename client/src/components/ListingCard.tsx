import Card from "react-bootstrap/Card";
import "../css/listingcard.css";

const ListingCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Subtitle className="mb-2 text muted">Posted by: Username</Card.Subtitle>
          <Card.Text>
            <strong>Description: </strong>This is where the listing description goes.
          </Card.Text>
          <Card.Text><strong>$100</strong></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListingCard;
