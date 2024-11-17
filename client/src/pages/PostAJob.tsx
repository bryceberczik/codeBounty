import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { MockedProvider } from "@apollo/client/testing";

import { Container, Col, Row } from "react-bootstrap";
import { Form, InputGroup, Button } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import "../css/postajob.css";

// Need a logged in user to complete functionality for adding username to listing & to display the user's current listings.

const PostAJob = () => {
  const [title, setTitle] = useState("");
  // const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const poster = "codingGuy123!";

  // ! MOCK DATA FOR LOGGED IN USER
  const mocks = [
    {
      request: {
        query: QUERY_ME,
      },
      result: {
        data: {
          me: {
            _id: "1",
            username: "JohnDoe",
            email: "john@example.com",
            role: "Web Developer",
            technologies: ["React", "Node.js"],
            description: "Hello world. I am a passionate and disciplined full-stack web developer.",
            links: ["https://github.com/johndoe"],
            listings: [
              {
                _id: "1",
                title: "Project A",
                description: "Description A",
                price: 100,
              },
              {
                _id: "2",
                title: "Project B",
                description: "Description B",
                price: 200,
              },
            ],
            jobs: [
              { _id: "1", status: "active" },
              { _id: "2", status: "completed" },
            ],
          },
        },
      },
    },
  ];

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
    <div style={{ paddingBottom: "1000px" }}>
      <div id="post-job-heading">
        <h1>Need a Service? Create a Listing!</h1>
        <p>codeBounty has hundreds of developers looking for work everyday.</p>
      </div>

      <Container>
        <Row className="g-5">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formListingTitle">
                <Form.Label>Title</Form.Label>
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

              <Form.Group className="mb-3" controlId="formListingDescription">
                <Form.Label>Description</Form.Label>
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
    </div>
  );
};

export default PostAJob;
