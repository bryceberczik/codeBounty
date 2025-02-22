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

  input ListingUpdateInput {
    _id: String!
    title: String
    description: String
    price: Int
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

  input JobStatusUpdateInput {
    _id: ID!
    status: String!
  }

  input UpdateUserInput {
    _id: ID!
    username: String
    email: String
    password: String
    role: String
    technologies: [String]
    description: String
    links: [String]
  }

  type Query {
    users: [User]
    user(username: String!): User
    userById(_id: ID!): User
    listings: [Listing]
    listing(_id: ID!): Listing
    findApplicantsByListingId(_id: ID!): [Job]
    jobs: [Job]
    job(_id: ID!): Job
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(username: String!, password: String!): Auth
    addListing(input: ListingInput!): ListingReturn
    updateListing(input: ListingUpdateInput!): ListingReturn
    deleteListing(_id: ID!): Listing
    addJob(input: JobInput!): JobReturn
    updateJobStatus(input: JobStatusUpdateInput!): JobReturn
    updateUser(input: UpdateUserInput!): User
    deleteUser(_id: ID!): User
  }
`;

export default typeDefs;
