import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import "../css/findwork.css";

const FindWork = () => {
  return (
    <div id="find-work">
      <h1>Search for work that fits your role.</h1>

      <Form id="find-work-search" className="d-flex">
        <Form.Control
          id="find-work-search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div id="find-work-search-button">
          <Button variant="outline-success">Search</Button>
        </div>
      </Form>

      <Container id="listings-container">
        <Row>
          <Col md={4} sm={6}>
            <ListingCard />
          </Col>
          <Col md={4} sm={6}>
            <ListingCard />
          </Col>
          <Col md={4} sm={6}>
            <ListingCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FindWork;
