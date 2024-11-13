import { Query } from "mongoose";
import { User } from "../models/index.js";
import { signToken, AuthenticationError } from "../utils/auth.js";

interface AddUserArgs {
  input: {
    username: string;
    email: string;
    password: string;
  };
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface UserArgs {
  username: string;
}

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("listings").populate("jobs");
    },
    user: async (_parent: unknown, { username }: UserArgs) => {
        return User.findOne({ username }).populate('listings').populate('jobs')
    },
    me: async (_parent: unknown, _args: unknown, context: any) => {
        // If the user is authenticated, find and return the user's information along with their thoughts
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('listings').populate('jobs');
        }
        // If the user is not authenticated, throw an AuthenticationError
        throw new AuthenticationError('Could not authenticate user.');
      },
  },
  Mutation: {
    addUser: async (_parent: unknown, { input }: AddUserArgs) => {

    }
  }
};
