import { useState } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { Form, InputGroup, Button } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import PageTab from "../components/PageTab";
import "../css/postajob.css";

// Need a logged in user to complete functionality for adding username to listing & to display the user's current listings.

const PostAJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const poster = "codingGuy123!";

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const formattedPrice = Number(price) || 0;

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
                  value={price}
                  onChange={handlePrice}
                  aria-label="Price (to the nearest dollar)"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form>

            <div id="post-listing-button-container">
              <Button id="post-listing-button">Post</Button>
            </div>
          </Col>

          <Col md={4} className="mx-auto pt-4">
            <ListingCard
              title={title}
              poster={poster}
              description={description}
              price={formattedPrice}
            />
          </Col>
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
