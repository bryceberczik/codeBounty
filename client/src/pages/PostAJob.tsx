import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_LISTING } from "../utils/mutations";
import { DELETE_LISTING } from "../utils/mutations";

import { Container, Col, Row } from "react-bootstrap";
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
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Fetch logged-in user's info.
  const { loading, error, data } = useQuery(QUERY_ME);
  const user = data?.me;

  // Mutation to add a listing.
  const [addListing, { loading: adding }] = useMutation(ADD_LISTING, {
    refetchQueries: [{ query: QUERY_ME }],
  });

  // Mutation to delete a listing.
  const [deleteListing] = useMutation(DELETE_LISTING, {
    refetchQueries: [{ query: QUERY_ME }]
  })

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);
  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);

  const handleAddListing = async () => {
    if (!title || !description || !price) {
      alert("Please fill out all fields before posting.");
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
      alert("Listing posted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error posting listing:", error);
    }
  };

  const handleDeleteListing = async (id: string) => {
    try {
      await deleteListing({
        variables: { id },
      });

      alert("Listing deleted successfully!");
    } catch (error) {
      console.error("Error deleting listing:", error);
      alert("Failed to delete the listing. Please try again.");
    }
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data: {error.message}</p>;

  return (
    <div>
      <PageTab title="Post A Job">
      <div id="post-job-heading">
        <h1>Create a listing with ease.</h1>
        <p>codeBounty has hundreds of developers looking for work everyday.</p>
      </div>

      <Container>
        <Row className="g-5">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3 group-space" controlId="formListingTitle">
                <Form.Label className="label-ind">Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={handleTitle}
                  placeholder="Enter title"
                  maxLength={35}
                />
                <Form.Text className="text-muted">
                  Developers can search for listings by title.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 group-space" controlId="formListingDescription">
                <Form.Label className="label-ind">Description</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={handleDescription}
                  placeholder="Enter description"
                  maxLength={225}
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
      </Container>
      <div className="why-section">
        <h1>Will a developer really see this listing?</h1>
        <h3>Developers love work.</h3>
        <div className="why-explain">
          <h2>Listing your project ensures developers can find and contact you for collaboration or inquiries.</h2>
        </div>
      </div>
      </PageTab>
    </div>
  );
};

export default PostAJob;
