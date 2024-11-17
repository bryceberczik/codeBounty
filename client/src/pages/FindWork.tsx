import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import "../css/findwork.css";
import PageTab from "../components/pageTab";

const FindWork = () => {
  return (
    <div id="find-work">

      <PageTab title="Find Work">

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

              <ListingCard
                title="Need a React Website"
                poster="User782"
                description="Hello, I need a full-stack web developer to make me my own React website."
                price={100}
              />
            </Col>

            <Col md={4} sm={6}>

              <ListingCard
                title="SQL Database"
                poster="codingGuy"
                description="Looking for a backend expert that can make a PostgreSQL database for my project. Minimum of 5 years of experience."
                price={260}
              />
            </Col>

            <Col md={4} sm={6}>

              <ListingCard
                title="Test Listing"
                poster="noPortfolio123!"
                description="This is a test."
                price={5}
              />
            </Col>

          </Row>

        </Container>

      </PageTab>

    </div>
  );
};

export default FindWork;
