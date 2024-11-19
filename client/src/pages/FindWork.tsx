import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import PageTab from "../components/PageTab";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS, QUERY_USERS } from "../utils/queries";
import { useState } from "react";
import "../css/findwork.css";

const FindWork = () => {
  const { loading: loadingListings, data: listingsData } = useQuery(QUERY_LISTINGS);
  const { loading: loadingUsers, data: usersData } = useQuery(QUERY_USERS);

  const listings = listingsData?.listings || [];
  const users = usersData?.users || [];

  const [searchQuery, setSearchQuery] = useState("");

  interface Listing {
    title: string;
  }

  const filteredListings = listings.filter((listing: Listing) => {
    return listing.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
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
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form>

        <Container id="listings-container">
          {loadingListings || loadingUsers ? (
            <div style={{ textAlign: "center" }}>Loading...</div>
          ) : (
                <ListingCard listings={filteredListings} users={users}/>
          )}
        </Container>
        <div className="get-accepted-container">
          <h1>Not getting jobs?</h1>

          <div className="get-accepted">
          <h2>The more jobs you do, the more your rating goes up.</h2>
          <h3>Clients will accept more offers from higher rated sellers</h3>
          </div>
        </div>
        
      </PageTab>
    </div>
  );
};
export default FindWork;
