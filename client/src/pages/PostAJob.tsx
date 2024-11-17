import { Container, Col, Row } from "react-bootstrap";
import { Form, InputGroup, Card, Button } from "react-bootstrap";
import "../css/postajob.css";

const PostAJob = () => {
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
                <Form.Control type="text" placeholder="Enter title" />
                <Form.Text className="text-muted">
                  Developers can search for listings by title.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formListingDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" />
                <Form.Text className="text-muted">
                  Give an overview on what you're looking for, what type of
                  developer you need, and what technologies you want to be
                  utilized.
                </Form.Text>
              </Form.Group>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Price (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>

          <Col md={6}>
            <div style={{ position: "relative" }}>
              <Card id="listing-card">
                <Card.Body>
                  <Card.Title id="card-title">Need a Database</Card.Title>
                  <Card.Subtitle id="card-lister" className="mb-2">
                    Posted by: UserPortfolio123!
                  </Card.Subtitle>
                  <Card.Text id="card-description">
                    <strong>Description: </strong>
                    Hello, developers. I am in need of a MongoDB database for my
                    personal website. It would be cool to have.
                  </Card.Text>
                  <Card.Text id="card-price">
                    <strong>$100</strong>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Button id="apply-button">Apply</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostAJob;
