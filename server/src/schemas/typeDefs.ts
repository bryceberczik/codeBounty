import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
    technologies: [String]
    description: String
    links: [String]
    listings: [Listing]
    jobs: [Job]
  }

  type Listing {
    _id: ID
    title: String
    description: String
    price: Int
    userId: ID
  }

  type Job {
    _id: ID
    listingId: ID
    userId: ID
    status: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    role: String
    technologies: [String]
    description: String
    links: [String]
  }

  input ListingInput {
    title: String!
    description: String!
    price: Int!
    userId: ID!
  }

  input JobInput {
    listingId: ID!
    userId: ID!
    status: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type ListingReturn {
    listing: Listing!
  }

  type JobReturn {
    job: Job!
  }

  type Query {
    users: [User]
    user(username: String!): User
    listings: [Listing]
    listing(_id: ID!): Listing
    jobs: [Job]
    job(_id: ID!): Job
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    addListing(input: ListingInput!): ListingReturn
    addJob(input: JobInput!): JobReturn
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
