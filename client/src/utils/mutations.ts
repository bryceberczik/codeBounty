import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($input: UserInput!) {
    addUser(input: $input) {
      user {
        username
        email
        password
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
