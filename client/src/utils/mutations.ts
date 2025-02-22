import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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

export const UPDATE_USER = gql`
  mutation Mutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      _id
      username
      role
      technologies
      description
      links
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($id: ID!) {
    deleteUser(_id: $id) {
      _id
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

export const UPDATE_LISTING = gql`
  mutation Mutation($input: ListingUpdateInput!) {
    updateListing(input: $input) {
      listing {
        _id
        title
        description
        price
      }
    }
  }
`;

export const DELETE_LISTING = gql`
  mutation Mutation($id: ID!) {
    deleteListing(_id: $id) {
      _id
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

export const UPDATE_JOB_STATUS = gql`
  mutation Mutation($input: JobStatusUpdateInput!) {
    updateJobStatus(input: $input) {
      job {
        _id
        status
      }
    }
  }
`;
