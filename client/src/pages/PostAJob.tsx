import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_LISTING } from "../utils/mutations";
import { DELETE_LISTING } from "../utils/mutations";

import { Container, Col, Row, Alert } from "react-bootstrap";
import { Form, InputGroup, Button } from "react-bootstrap";
import TestListingCard from "../components/TestListingCard";
import YourListingCard from "../components/YourListingCard";
import PageTab from "../components/PageTab";
import "../css/postajob.css";

interface YourListingsProps {
  _id: string;
  title: string;
  description: string;
  price: number;
}

const PostAJob = () => {
  const [title, setTitle] = useState("");
  const maxTitleCharCount = 35;
  const [description, setDescription] = useState("");
  const maxDescriptionCharCount = 225;
  const [price, setPrice] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertVariant, setAlertVariant] = useState<string>("warning");

  // Fetch logged-in user's info.
  const { loading, error, data } = useQuery(QUERY_ME);
  const user = data?.me;

  // Mutation to add a listing.
  const [addListing, { loading: adding }] = useMutation(ADD_LISTING, {
    refetchQueries: [{ query: QUERY_ME }],
  });

  // Mutation to delete a listing.
  const [deleteListing] = useMutation(DELETE_LISTING, {
    refetchQueries: [{ query: QUERY_ME }],
  });

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);
  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);

  const handleAddListing = async () => {
    if (!title || !description || !price) {
      setAlertMessage("Please fill out all fields before posting.");
      setAlertVariant("danger");
      return;
    }

    try {
      await addListing({
        variables: {
          input: {
            title,
            description,
            price: Number(price),
            userId: user._id,
          },
        },
      });

      // Clear the form after successful submission.

      setTitle("");
      setDescription("");
      setPrice("");
      setAlertMessage("Listing posted successfully!");
      setAlertVariant("success");
    } catch (error) {
      console.error("Error posting listing:", error);
    }
  };

  const handleDeleteListing = async (id: string) => {
    try {
      await deleteListing({
        variables: { id },
      });

      setAlertMessage("Listing deleted successfully!");
      setAlertVariant("success");
    } catch (error) {
      console.error("Error deleting listing:", error);
      setAlertMessage("Failed to delete the listing. Please try again.");
      setAlertVariant("danger");
    }
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data: {error.message}</p>;

  return (
    <div>
      <PageTab title="Post A Job">
        {alertMessage && (
          <Alert
            className="alert-back"
            variant={alertVariant}
            onClose={() => setAlertMessage(null)}
            dismissible
          >
            {alertMessage}
          </Alert>
        )}
        <div id="post-job-heading">
          <h1>Create a listing with ease.</h1>
          <p>
            codeBounty has hundreds of developers looking for work everyday.
          </p>
        </div>

        <Container>
          <Row className="g-5">
            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3 group-space"
                  controlId="formListingTitle"
                >
                  <div className="form-title-cust">
                    <Form.Label className="label-ind">Title</Form.Label>
                    <p>
                      {title.length}/{maxTitleCharCount}
                    </p>
                  </div>
                  <Form.Control
                    type="text"
                    value={title}
                    maxLength={maxTitleCharCount}
                    onChange={handleTitle}
                    placeholder="Enter title"
                  />
                  <Form.Text className="text-muted">
                    Developers can search for listings by title.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3 group-space"
                  controlId="formListingDescription"
                >
                  <div className="form-title-cust">
                    <Form.Label className="label-ind">Description</Form.Label>
                    <p>
                      {description.length}/{maxDescriptionCharCount}
                    </p>
                  </div>
                  <Form.Control
                    type="text"
                    value={description}
                    maxLength={maxDescriptionCharCount}
                    onChange={handleDescription}
                    placeholder="Enter description"
                  />
                  <Form.Text className="text-muted">
                    Give an overview on what you're looking for, what type of
                    developer you need, and what technologies you want to be
                    utilized.
                  </Form.Text>
                </Form.Group>

                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={handlePrice}
                    aria-label="Price (to the nearest dollar)"
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
              </Form>

              <div id="post-listing-button-container">
                <Button
                  id="post-listing-button"
                  onClick={handleAddListing}
                  disabled={adding}
                >
                  {adding ? "Posting..." : "Post"}
                </Button>
              </div>
            </Col>

            <Col md={4} className="mx-auto pt-4">
              <TestListingCard
                title={title}
                poster={user.username}
                description={description}
                price={Number(price) || 0}
              />
            </Col>
          </Row>
        </Container>
        <h1 id="your-listings-text">Your Current Listings</h1>

        <Container id="your-listings-container">
          {user?.listings?.length === 0 ? (
            <p id="no-listings-message">You have no current listings.</p>
          ) : (
            <Row>
              {user?.listings?.map((listing: YourListingsProps) => (
                <Col key={listing._id} md={4} sm={6}>
                  <YourListingCard
                    title={listing.title}
                    poster={user.username}
                    description={listing.description}
                    listingId={listing._id}
                    onDelete={() => handleDeleteListing(listing._id)}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Container>
        <div className="why-section">
          <h1>Will a developer really see this listing?</h1>
          <h3>Developers love work.</h3>
          <div className="why-explain">
            <h2>
              Listing your project ensures developers can find and contact you
              for collaboration or inquiries.
            </h2>
          </div>
        </div>
      </PageTab>
    </div>
  );
};

export default PostAJob;
