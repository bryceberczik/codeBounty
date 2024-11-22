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

    // ! Client Users ! //

    // * User 1 * //
    const user1 = await User.create({
      username: "Emily_James",
      email: "emily@james.com",
      password: "seed1!",
    });

    const listing1 = await Listing.create({
      title: "Build a Responsive Website For My Business",
      description:
        "I need a web developer to build a fully responsive website for my small business. It should look great on both desktop and mobile devices.",
      price: 2250,
      userId: user1._id,
    });

    const listing2 = await Listing.create({
      title: "Redesign My Homepage With a Modern Look",
      description:
        "My homepage feels outdated. Can you redesign it with a fresh, modern look that matches my brand?",
      price: 1150,
      userId: user1._id,
    });

    user1.listings.push(listing1._id as mongoose.ObjectId);
    user1.listings.push(listing2._id as mongoose.ObjectId);
    await user1.save();

    // * User 2 * //

    const user2 = await User.create({
      username: "Sarah92",
      email: "sarah@92.com",
      password: "seed1!",
    });

    const listing3 = await Listing.create({
      title: "Develop a Database For Customer Management",
      desciption:
        "I need a database to store customer details and make managing my client data easier.",
      price: 1500,
      userId: user2._id,
    });

    const listing4 = await Listing.create({
      title:
        "Design a Clean, User-Friendly Dashboard For Easy Data Visualization",
      description:
        "Help me design a dashboard that's clean, simple, and easy to understand for my team to use daily.",
      price: 1350,
      userId: user2._id,
    });

    user2.listings.push(listing3._id as mongoose.ObjectId);
    user2.listings.push(listing4._id as mongoose.ObjectId);
    await user2.save();

    // * User 3 * //

    const user3 = await User.create({
      username: "JohnDoe123",
      email: "john@doe123.com",
      password: "seed1!",
    });

    const listing5 = await Listing.create({
      title: "Fix Layout Issues On My Web App",
      description:
        "My app layout has a few glitches that are ruining the user experience. Can anyone fix them?",
      price: 325,
      userId: user3._id,
    });

    user3.listings.push(listing5._id as mongoose.ObjectId);
    await user3.save();

    // * User 4 * //

    const user4 = await User.create({
      username: "AlexTaylor",
      email: "alex@taylor.com",
      password: "seed1!",
    });

    const listing6 = await Listing.create({
      title: "Design Wireframes For a New Web Project",
      description:
        "I've got a project idea but need wireframes to visualize it. Need a UI/UX designer to help me create a basic prototype!",
      price: 500,
      userId: user4._id,
    });

    const listing7 = await Listing.create({
      title: "Help With Backend Integration For My App",
      description:
        "I'm struggling to connect the backend to my app. Can a backend specialist help integrate the APIs properly?",
      price: 1150,
      userId: user4._id,
    });

    const listing8 = await Listing.create({
      title: "Create a Sleek Landing Page For My Product",
      description:
        "I need a stunning landing page for my product launch that grabs attention and converts visitors.",
      price: 950,
      userId: user4._id,
    });

    user4.listings.push(listing6._id as mongoose.ObjectId);
    user4.listings.push(listing7._id as mongoose.ObjectId);
    user4.listings.push(listing8._id as mongoose.ObjectId);
    await user4.save();

    // * User 5 * //

    const user5 = await User.create({
      username: "Chloe_Brown",
      email: "chloe@brown.com",
      password: "seed1!",
    });

    const listing9 = await Listing.create({
      title: "Optimize My Website For Faster Loading Speeds",
      description:
        "My site is slow, and it's frustrating users. Need a dev's help to optimize the site so it loads faster and perfoms better.",
      price: 550,
      userId: user5._id,
    });

    const listing10 = await Listing.create({
      title: "Design a Mobile-Friendly User Experience",
      description:
        "I need a user-friendly design for my app that's easy to navigate and looks professional",
      price: 1850,
      userId: user5._id,
    });

    user5.listings.push(listing9._id as mongoose.ObjectId);
    user5.listings.push(listing10._id as mongoose.ObjectId);
    await user5.save();

    // * User 6 * //

    const user6 = await User.create({
      username: "EmmaJohnson",
      email: "emma@johnson",
      password: "seed1!",
    });

    const listing11 = await Listing.create({
      title: "Develop a Database For Inventory-Tracking",
      description:
        "Can I get a database expert to set up a database to help me track inventory and ensure my business runs smoothly?",
      price: 1500,
      userId: user6._id,
    });

    user6.listings.push(listing11._id as mongoose.ObjectId);
    await user6.save();
  } catch (error) {}
};
