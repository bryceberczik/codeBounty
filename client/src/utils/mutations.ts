import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($input: UserInput!) {
    addUser(input: $input) {
      token
      user {
        username
        email
        password
        role
        technologies
        description
        links
      }
    }
  }
`;

export const ADD_LISTING = gql`
  mutation Mutation($input: ListingInput!) {
    addListing(input: $input) {
      listing {
        title
        description
        price
        userId
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation Mutation($input: JobInput!) {
    addJob(input: $input) {
      job {
        listingId
        userId
        status
      }
    }
  }
`;
