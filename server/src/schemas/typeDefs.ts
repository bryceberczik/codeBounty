import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    listings: [Listing]
    jobs: [Job]
  }

  type Listing {
    _id: ID
    title: String
    description: String
    price: Int
    userId: User
  }

  type Job {
    _id: ID
    listing: Listing
    user: User
    status: String
  }
  
  type UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
  }

`;

export default typeDefs;