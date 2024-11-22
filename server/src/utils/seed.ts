import seedData from "./seedData.js";

seedData()
  .then(() => {
    console.log("Database seeding completed!");
    process.exit();
  })
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });
