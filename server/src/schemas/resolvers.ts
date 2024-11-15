import { Listing, User, Job } from "../models/index.js";
import { signToken, AuthenticationError } from "../utils/auth.js";

interface AddUserArgs {
  input: {
    username: string;
    email: string;
    password: string;
    role?: string;
    technologies?: string[];
    description?: string;
    links?: string[];
  };
}

interface AddListingArgs {
  input: {
    title: string;
    description: string;
    price: number;
    userId: string;
  };
}

interface AddJobArgs {
  input: {
    listingId: string;
    userId: string;
    status: string;
  };
}

interface LoginUserArgs {
  username: string;
  password: string;
}

interface UserArgs {
  username: string;
}

interface ListingArgs {
  _id: string;
}

interface UpdateListingArgs {
  input: {
    _id: string;
    title: string;
    description: string;
    price: number;
  };
}

interface JobArgs {
  _id: string;
}

interface UpdateJobArgs {
  input: {
    _id: string;
    status: string;
  };
}

interface UpdateUserArgs {
  input: {
    _id: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    technologies?: string[];
    description?: string;
    links?: string[];
  };
}

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find().populate("listings").populate("jobs");
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to retrieve users.");
      }
    },
    user: async (_parent: any, { username }: UserArgs) => {
      try {
        return await User.findOne({ username }).populate("listings").populate("jobs");
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to retrieve user.");
      }
    },
    listings: async () => {
      try {
        return await Listing.find();
      } catch (error) {
        console.error("Error fetching listings:", error);
        throw new Error("Failed to retrieve listings.");
      }
    },
    listing: async (_parent: any, { _id }: ListingArgs) => {
      try {
        return await Listing.findOne({ _id });
      } catch (error) {
        console.error("Error fetching listing:", error);
        throw new Error("Failed to retrieve listing.");
      }
    },
    jobs: async () => {
      try {
        return await Job.find();
      } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to retrieve jobs.");
      }
    },
    job: async (_parent: any, { _id }: JobArgs) => {
      try {
        return await Job.findOne({ _id });
      } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to retrieve job.");
      }
    },
    me: async (_parent: any, _args: any, context: any) => {
      // If the user is authenticated, find and return the user's information along with their thoughts
      try {
        if (context.user) {
          return await User.findOne({ _id: context.user._id })
            .populate("listings")
            .populate("jobs");
        }

        throw new AuthenticationError("Could not authenticate user.");
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to retrieve user.");
      }
    },
  },
  Mutation: {
    addUser: async (_parent: unknown, { input }: AddUserArgs) => {
      const user = await User.create({ ...input });
      const token = signToken(user.username, user.email, user._id);

      return { token, user };
    },
    addListing: async (_parent: any, { input }: AddListingArgs) => {
      const { userId, ...listingData } = input;

      const listing = await Listing.create({ ...listingData, userId });

      await User.findByIdAndUpdate(
        userId,
        { $push: { listings: listing._id } },
        { new: true }
      );

      return { listing };
    },
    updateListing: async (_parent: any, { input }: UpdateListingArgs) => {
      const { _id, title, description, price } = input;

      const listing = await Listing.findByIdAndUpdate(
        _id,
        { title, description, price },
        { new: true }
      );

      if (!listing) {
        throw new Error("No listing found with that ID.");
      }

      return { listing };
    },
    deleteListing: async (_parent: any, { _id }: { _id: string }) => {
      const listing = await Listing.findByIdAndDelete(_id);

      if (!listing) {
        throw new Error("No listing found with that ID.");
      }

      return { listing };
    },
    addJob: async (_parent: any, { input }: AddJobArgs) => {
      const { listingId, userId, ...JobData } = input;

      const job = await Job.create({ ...JobData, listingId, userId });

      await User.findByIdAndUpdate(
        userId,
        { $push: { jobs: job._id } },
        { new: true }
      );

      return { job };
    },
    updateJobStatus: async (_parent: any, { input }: UpdateJobArgs) => {
      const { _id, status } = input;

      const job = await Job.findByIdAndUpdate(_id, { status }, { new: true });

      if (!job) {
        throw new Error("No job found with that ID.");
      }

      return { job };
    },
    updateUser: async (_parent: any, { input }: UpdateUserArgs) => {
      const { _id, ...updateData } = input;

      const user = await User.findByIdAndUpdate(_id, updateData, { new: true });

      if (!user) {
        throw new Error("No user found with that ID.");
      }

      return user;
    },
    deleteUser: async (_parent: any, { _id }: { _id: string }) => {
      const user = await User.findById(_id);

      if (!user) {
        throw new Error("No user found with that ID.");
      }

      await Job.deleteMany({ _id: { $in: user.jobs } });

      await User.findByIdAndDelete(_id);

      return user;
    },
    login: async (_parent: any, { username, password }: LoginUserArgs) => {
      // Find a user with the provided username
      const user = await User.findOne({ username });

      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError("Could not authenticate user.");
      }

      // Check if the provided password is correct
      const correctPassword = await user.isCorrectPassword(password);

      // If the password is incorrect, throw an AuthenticationError
      if (!correctPassword) {
        throw new AuthenticationError("Could not authenticate user.");
      }

      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);

      // Return the token and the user
      return { token, user };
    },
  },
};

export default resolvers;
