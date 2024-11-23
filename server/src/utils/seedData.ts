import mongoose from "mongoose";
import { User } from "../models/index.js";
import { Listing } from "../models/index.js";
import { Job } from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");

    await User.deleteMany({});
    await Listing.deleteMany({});
    await Job.deleteMany({});

    // ! ------------ ! //
    // ! Client Users ! //
    // ! ------------ ! //

    // * User 1 * //

    const user1 = await User.create({
      username: "Emily_James",
      email: "emily@james.com",
      password: "seed123!",
      _isSeeding: true,
    });

    const listing1 = await Listing.create({
      title: "Responsive Website For My Business",
      description:
        "I need a web developer to build a fully responsive website for my small business. It should look great on both desktop and mobile devices.",
      price: 2250,
      userId: user1._id,
    });

    const listing2 = await Listing.create({
      title: "Redesign My Homepage",
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
      password: "seed123!",
      _isSeeding: true,
    });

    const listing3 = await Listing.create({
      title: "Database For Customer Management",
      description:
        "I need a database to store customer details and make managing my client data easier.",
      price: 1500,
      userId: user2._id,
    });

    const listing4 = await Listing.create({
      title:
        "Dashboard For Data Visualization",
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
      password: "seed123!",
      _isSeeding: true,
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
      password: "seed123!",
      _isSeeding: true,
    });

    const listing6 = await Listing.create({
      title: "Wireframes For New Project",
      description:
        "I've got a project idea but need wireframes to visualize it. Need a UI/UX designer to help me create a basic prototype!",
      price: 500,
      userId: user4._id,
    });

    const listing7 = await Listing.create({
      title: "Help With Backend Integration",
      description:
        "I'm struggling to connect the backend to my app. Can a backend specialist help integrate the APIs properly?",
      price: 1150,
      userId: user4._id,
    });

    const listing8 = await Listing.create({
      title: "Sleek Landing Page For My Product",
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
      password: "seed123!",
      _isSeeding: true,
    });

    const listing9 = await Listing.create({
      title: "Optimize Loading Speeds",
      description:
        "My site is slow, and it's frustrating users. Need a dev's help to optimize the site so it loads faster and perfoms better.",
      price: 550,
      userId: user5._id,
    });

    const listing10 = await Listing.create({
      title: "Design Mobile-Friendly Experience",
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
      email: "emma@johnson.com",
      password: "seed123!",
      _isSeeding: true,
    });

    const listing11 = await Listing.create({
      title: "Inventory-Tracking Database",
      description:
        "Can I get a database expert to set up a database to help me track inventory and ensure my business runs smoothly?",
      price: 1500,
      userId: user6._id,
    });

    user6.listings.push(listing11._id as mongoose.ObjectId);
    await user6.save();

    // ! --------------- ! //
    // ! Developer Users ! //
    // ! --------------- ! //

    // * User 7 * //

    // const user7 = await User.create({
    //   username: "Jack_Thomas22",
    //   email: "jack@thomas22.com",
    //   password: "seed123!",
    //   role: "Frontend Developer",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "React",
    //     "Redux",
    //     "Bootstrap",
    //   ],
    //   description:
    //     "I specialize in creating clean, responsive, and visually appealing websites. With a strong focus on performance and accessibility, I ensure every site looks great on any device.",
    //   links: [
    //     "https://jackthomasportfolio.com",
    //     "https://modernshopdesign.com",
    //     "https://github.com/jackthomas22",
    //   ],
    // });

    // // * User 8 * //

    // const user8 = await User.create({
    //   username: "GraceParker",
    //   email: "grace@parker.com",
    //   password: "seed123!",
    //   role: "UI/UX Designer",
    //   technologies: [
    //     "Figma",
    //     "Sketch",
    //     "AdobeXD",
    //     "CSS",
    //     "Wireframes",
    //     "Prototyping",
    //   ],
    //   description:
    //     "I'm passionate about crafting user-friendly designs that enhance the user experience. I bring ideas to life through detailed wireframes, prototypes, and creative visuals.",
    //   links: [
    //     "https://graceparkerdesigns.com",
    //     "https://dribbble.com/graceparker",
    //     "https://behance.net/graceparker",
    //   ],
    // });

    // // * User 9 * //

    // const user9 = await User.create({
    //   username: "Luke-Adams",
    //   email: "luke@adams.com",
    //   password: "seed123!",
    //   role: "Database Administrator",
    //   technologies: ["SQL", "MongoDB", "PostgreSQL", "NoSQL", "Firebase"],
    //   description:
    //     "I design and manage databases to ensure seamless data flow and storage. Whether it’s SQL or NoSQL, I optimize systems for speed, security, and scalability.",
    //   links: [
    //     "https://lukeadamsdatabases.com",
    //     "https://github.com/luke-adams",
    //   ],
    // });

    // // * User 10 * //

    // const user10 = await User.create({
    //   username: "Isabella.Moore",
    //   email: "isabella@moore.com",
    //   password: "seed123!",
    //   role: "Backend Developer",
    //   technologies: [
    //     "Node.js",
    //     "Express",
    //     "Python",
    //     "Django",
    //     "GraphQL",
    //     "APIs",
    //     "PostgreSQL",
    //   ],
    //   description:
    //     "I build robust backend systems to power modern applications. My expertise includes API development, database integration, and scalable architecture.",
    //   links: [
    //     "https://backendbyisabella.com",
    //     "https://github.com/isabellamoore",
    //     "https://apiintegrationproject.com",
    //   ],
    // });

    // // * User 11 * //

    // const user11 = await User.create({
    //   username: "Henry_Taylor93",
    //   email: "henry@taylor93.com",
    //   password: "seed123!",
    //   role: "Full Stack Developer",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //   ],
    //   description:
    //     "I bring ideas to life with full-stack solutions. From frontend design to backend development, I deliver user-focused applications tailored to client needs.",
    //   links: [
    //     "https://henrytaylorprojects.com",
    //     "https://github.com/henry-taylor93",
    //     "https://ecommercefullstack.com",
    //   ],
    // });

    // // * User 12 * //

    // const user12 = await User.create({
    //   username: "SophieKing",
    //   email: "sophie@king.com",
    //   password: "seed123!",
    //   role: "UI/UX Designer",
    //   technologies: [
    //     "Figma",
    //     "Photoshop",
    //     "Wireframes",
    //     "Prototyping",
    //     "CSS",
    //     "HTML",
    //   ],
    //   description:
    //     "I transform concepts into intuitive and engaging designs. My goal is to create seamless user experiences with creativity and attention to detail.",
    //   links: [
    //     "https://sophiekingdesigns.com",
    //     "https://dribbble.com/sophieking",
    //     "https://minimalappdesign.com",
    //   ],
    // });
  } catch (error) {
    // console.log(process.env.MONGODB_URI);
    console.error("Error Seeding Data:", error);
  }
};

export default seedData;
