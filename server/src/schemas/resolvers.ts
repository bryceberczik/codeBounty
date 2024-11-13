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
    user: async (_parent: any, { username }: UserArgs) => {
        return User.findOne({ username }).populate('listings').populate('jobs')
    },
    me: async (_parent: any, _args: any, context: any) => {
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
        const user = await User.create({ ...input });
        const token = signToken(user.username, user.email, user._id);

        return { token, user };
    },
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
        // Find a user with the provided email
        const user = await User.findOne({ email });
      
        // If no user is found, throw an AuthenticationError
        if (!user) {
          throw new AuthenticationError('Could not authenticate user.');
        }
      
        // Check if the provided password is correct
        const correctPw = await user.isCorrectPassword(password);
      
        // If the password is incorrect, throw an AuthenticationError
        if (!correctPw) {
          throw new AuthenticationError('Could not authenticate user.');
        }
      
        // Sign a token with the user's information
        const token = signToken(user.username, user.email, user._id);
      
        // Return the token and the user
        return { token, user };
      },
  }
};

export default resolvers;