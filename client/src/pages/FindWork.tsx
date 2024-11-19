import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import PageTab from "../components/PageTab";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";
import "../css/findwork.css";

const FindWork = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

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
          {loading ? (
            <div>Loading...</div>
          ) : (
                <ListingCard listings={listings} />
          )}
        </Container>
      </PageTab>
    </div>
  );
};
export default FindWork;
