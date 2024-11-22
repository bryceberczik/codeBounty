import mongoose from "mongoose";
import { User } from "../models/index";
import { Listing } from "../models/index";
import { Job } from "../models/index";

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");

    await User.deleteMany({});
    await Listing.deleteMany({});
    await Job.deleteMany({});

    const user1 = await User.create({
      username: "Emily_James",
      email: "emily@james.com",
      password: "seed1!",
    });

    const listing1 = await Listing.create({
      title: "Build a Responsive Website For My Business",
      description:
        "I need a web developer to build a fully responsive website for my small business. It should look great on both desktop and mobile devices.",
      price: 1500,
      userId: user1._id,
    });

    const listing2 = await Listing.create({
      title: "Redesign My Homepage With a Modern Look",
      description: "My homepage feels outdated. Can you redesign it with a fresh, modern look that matches my brand?",
      price: 800,
      userId: user1._id,
    })

    user1.listings.push(listing1._id);
    user1.listings.push(listing2._id);
    await user1.save();
  } catch (error) {}
};
