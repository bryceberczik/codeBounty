import { useLazyQuery } from "@apollo/client";
import { FIND_APPLICANTS_BY_LISTING_ID } from "../utils/queries";
import { Modal, Card, Button } from "react-bootstrap";
import { useState } from "react";
import "../css/listingcard.css";

interface ListingCardProps {
  listingId: string;
  title: string;
  poster: string;
  description: string;
  onDelete: () => void;
}

const YourListingCard = ({
  listingId,
  title,
  poster,
  description,
  onDelete,
}: ListingCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (listingId: string) => {
    findApplicantsByListingId({ variables: {listingId} })
    setShowModal(true);
  }
  const handleCloseModal = () => setShowModal(false);

  const [findApplicantsByListingId, { data, loading }] = useLazyQuery(
    FIND_APPLICANTS_BY_LISTING_ID
    // { variables: { listingId: "_id" } }
  );

  if (loading) {
    return <p>Loading...</p>
  }

  console.log(data);
  

  return (
    <div className="your-listingcard-container">
      <Card className="your-listing-card">
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Subtitle className="card-lister mb-2">
            Posted by: {poster}
          </Card.Subtitle>
          <Card.Text className="card-description">
            <strong>Description: </strong>
            {description}
          </Card.Text>
          <div id="your-listing-buttons-container">
            <Button id="your-listing-button" onClick={() => handleShowModal(listingId)}>
              View Applicants
            </Button>
            <Button id="your-listing-button" onClick={onDelete}>
              Delete Listing
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>View Applicants</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="applicant-div">
            <div className="applicant-container">
              <h4>Zander</h4>
              <div className="applicant-btn-container">
                <button>Accept</button>
                <button>Reject</button>
              </div>
            </div>

            
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default YourListingCard;
