import { useLazyQuery, useMutation } from "@apollo/client";
import {
  QUERY_USER_BY_ID,
  FIND_APPLICANTS_BY_LISTING_ID,
} from "../utils/queries";
import { UPDATE_JOB_STATUS, DELETE_LISTING } from "../utils/mutations";
import { Modal, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/listingcard.css";

interface ListingCardProps {
  listingId: string;
  title: string;
  poster: string;
  description: string;
  onDelete: () => void;
}

interface handleAcceptApplicantProps {
  jobId: string;
  username: string;
  email: string;
  listingId: string;
}

interface handleRejectApplicantProps {
  jobId: string;
  username: string;
}

const YourListingCard = ({
  listingId,
  title,
  poster,
  description,
  onDelete,
}: ListingCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [applicantDetailsArray, setApplicantDetailsArray] = useState<any[]>([]);

  const [updateJobStatus] = useMutation(UPDATE_JOB_STATUS);
  const [deleteListing] = useMutation(DELETE_LISTING);
  const [findUserById] = useLazyQuery(QUERY_USER_BY_ID);
  const [findApplicantsByListingId] = useLazyQuery(
    FIND_APPLICANTS_BY_LISTING_ID
  );

  useEffect(() => {
    console.log("Applicant Details Array:", applicantDetailsArray);
  }, [applicantDetailsArray]);

  // * handleShowModal Function (using findApplicantsByListingId) * //
  const handleShowModal = async (listingId: string) => {
    try {
      const { data: applicants } = await findApplicantsByListingId({
        variables: { listingId },
      });

      if (applicants) {
        const userIds = applicants.findApplicantsByListingId.map(
          (applicant: { userId: string }) => applicant.userId
        );

        // console.log(userIds);

        const fetchedApplicantDetails = await Promise.all(
          userIds.map(async (userId: string) => {
            const userDetails = await handleApplicantDetails(userId, listingId);
            // console.log(userDetails);
            return userDetails;
          })
        );
        // console.log("Fetched Applicant Details:", fetchedApplicantDetails);

        const filteredApplicants = fetchedApplicantDetails.filter(
          (applicant) => applicant !== null
        );
        // console.log("Filtered Applicant Details:", filteredApplicants);

        setApplicantDetailsArray(filteredApplicants);
      }

      setShowModal(true);
    } catch (error) {
      console.error("handleShowModal Error:", error);
    }
  };

  // * handleCloseModal Function * //
  const handleCloseModal = () => setShowModal(false);

  // * handleApplicantDetails Function (using findUserById) * //
  const handleApplicantDetails = async (userId: string, listingId: string) => {
    // console.log(userId);
    // console.log(listingId);

    try {
      const { data } = await findUserById({ variables: { id: userId } });

      // console.log(data);

      if (data) {
        // console.log("Data:", data);
        // console.log("ListingId:", listingId);
        // console.log("Jobs:", data.userById.jobs);
        const job = data.userById.jobs.find(
          (job: { listingId: string; status: string }) =>
            job.listingId === listingId && job.status !== "rejected"
        );

        if (job) {
          // console.log(data.userById);
          // console.log(job._id);
          // console.log(listingId);
          return {
            ...data.userById,
            jobId: job._id,
            listingId: listingId,
          };
        } else {
          console.warn(
            `No job found for userId: ${userId} and listingId: ${listingId}.`
          );
          return null;
        }
      } else {
        console.warn(`No data found for userId: ${userId}.`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching data for userId: ${userId}.`, error);
      return null;
    }
  };

  const handleAcceptApplicant = async (
    applicant: handleAcceptApplicantProps
  ) => {
    const { jobId, username, email, listingId } = applicant;

    await updateJobStatus({
      variables: {
        input: {
          _id: jobId,
          status: "accepted",
        },
      },
    });

    navigate("/congrats", {
      state: {
        jobId,
        username,
        email,
        listingId,
      },
    });

    await handleDeleteListing(listingId);
  };

  // * Optimistic UI Function * //

  const handleRejectApplicant = async (
    applicant: handleRejectApplicantProps
  ) => {
    const { jobId } = applicant;

    const removedApplicant = applicantDetailsArray.find(
      (app) => app.jobId === jobId
    );

    setApplicantDetailsArray((prevArray) =>
      prevArray.filter((app) => app.jobId !== jobId)
    );

    try {
      await updateJobStatus({
        variables: {
          input: {
            _id: jobId,
            status: "rejected",
          },
        },
      });
    } catch (error) {
      console.error("Error rejecting applicant:", error);

      setApplicantDetailsArray((prevArray) => [...prevArray, removedApplicant]);
      alert("Something went wrong. The rejection could not be processed.");
    }
  };

  // * Similar handleDeleteListing Function to parent file, PostAJob.tsx. * //

  const handleDeleteListing = async (listingId: string) => {
    try {
      await deleteListing({
        variables: { id: listingId },
      });

      onDelete();
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  return (
    <div className="your-listingcard-container">
      <Card className="your-listing-card">
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Subtitle className="card-lister mb-2">
            Posted by: {poster}
          </Card.Subtitle>
          <Card.Text className="card-description">
            <strong>Description: </strong>
            {description}
          </Card.Text>
          <div id="your-listing-buttons-container">
            <Button
              id="your-listing-button"
              onClick={() => handleShowModal(listingId)}
            >
              View Applicants
            </Button>
            <Button id="your-listing-button" onClick={onDelete}>
              Delete Listing
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>View Applicants</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="applicant-div">
            {applicantDetailsArray.length > 0 ? (
              applicantDetailsArray.map((applicant: any, index) => (
                <div className="applicant-container" key={index}>
                  <h4>{applicant.username}</h4>
                  <div className="applicant-profile-btn">
                    <Link
                      style={{ textDecoration: "none", color: "#003049" }}
                      to={`/profiles/${applicant.username}`}
                    >
                      <p>{applicant.username}'s Profile</p>
                    </Link>
                  </div>
                  <div className="applicant-btn-container">
                    <button onClick={() => handleAcceptApplicant(applicant)}>
                      Accept
                    </button>
                    <button onClick={() => handleRejectApplicant(applicant)}>
                      Reject
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No applicants found.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default YourListingCard;
