import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      role
      technologies
      description
      links
      listings {
        _id
        title
        description
        price
      }
      jobs {
        _id
        status
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      role
      technologies
      description
      links
      listings {
        _id
        title
        description
        price
      }
      jobs {
        _id
        status
      }
    }
  }
`;

export const QUERY_LISTINGS = gql`
query Listings {
  listings {
    _id
    description
    price
    title
    userId
  }
}
`;

export const QUERY_SINGLE_LISTING = gql`
  query getSingleListing($id: ID!) {
    listing(_id: $id) {
      _id
      title
      description
      price
      userId
    }
  }
`;

export const QUERY_JOBS = gql`
  query getJobs {
    _id
    listingId
    userId
    status
  }
`;

export const QUERY_SINGLE_JOB = gql`
  query getSingleJob($id: ID!) {
    job(_id: $id) {
    _id
    listingId
    userId
    status
    }
  }
`;
