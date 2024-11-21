import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ListingCard from "../components/ListingCard";
import PageTab from "../components/PageTab";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_LISTINGS, QUERY_USERS, QUERY_ME } from "../utils/queries";
import { ADD_JOB } from "../utils/mutations";
import { useState } from "react";
import "../css/findwork.css";

interface Listing {
  _id: string;
  title: string;
}

interface Job {
  listingId: string;
}

const FindWork = () => {
  const { loading: loadingListings, data: listingsData } =
    useQuery(QUERY_LISTINGS);
  const { loading: loadingUsers, data: usersData } = useQuery(QUERY_USERS);

  const { data } = useQuery(QUERY_ME);
  const user = data?.me;

  const [addJob] = useMutation(ADD_JOB);

  const listings = listingsData?.listings || [];
  const users = usersData?.users || [];

  const [searchQuery, setSearchQuery] = useState("");

  const [appliedListings, setAppliedListings] = useState<Set<string>>(
    new Set()
  );

  const filteredListings = listings.filter((listing: Listing) => {
    return listing.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleApplication = async (listingId: string) => {
    try {
      // console.log("Listing ID:", listingId);
      // console.log("User's listings:", user.listings);
      // console.log("User's jobs:", user.jobs);

      const hasApplied = user.jobs.some(
        (job: Job) => job.listingId === listingId
      );

      if (hasApplied || appliedListings.has(listingId)) {
        alert(
          "You have already applied to this listing. You will be notified when the author of this post makes a decision on your application."
        );
        return;
      }

      const isOwnListing = user.listings.some(
        (listing: Listing) => listing._id === listingId
      );
      console.log("Is own listing:", isOwnListing);

      if (isOwnListing) {
        alert("You cannot apply to your own listing.");
        return;
      }

      await addJob({
        variables: {
          input: {
            listingId: listingId,
            userId: user._id,
            status: "pending",
          },
        },
      });

      setAppliedListings((currentListings) =>
        new Set(currentListings).add(listingId)
      );

      alert("Applied to job successfully!");
    } catch (error) {
      console.error("Error applying to job:", error);
    }
  };

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
            <ListingCard
              listings={filteredListings}
              users={users}
              onApply={handleApplication}
            />
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
