// import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

import "../css/explore.css";
import DevCard from "../components/DevCard";
import FaqAccordion from "../components/FaqAccordion";
import PageTab from "../components/PageTab";

type IJob = {
  _id: string;
  listingId: string;
  userId: string;
  status: string;
};

type IListing = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  price: number;
};

type IUser = {
  _id: string;
  username: string;
  role: string;
  links: string[];
  email: string;
  description: string;
  technologies: string[];
  jobs: IJob[];
  listings: IListing[];
};

const Explore = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  if (loading) return <p>Loading...</p>;

  const users: IUser[] = data.users;
  // console.log(users);
  const developers = users.filter((user) => user.jobs.length > 0);
  // console.log(developers);

  const left = "<";
  const right = ">";

  return (
    <div className="explore-container">
      <PageTab title="Explore">
        <div className="intro-text-explore">
          <h1>Top Rated Sellers</h1>
        </div>
        <div className="explore-users-container">
          <div className="turn">
            <h1>{left}</h1>
          </div>
          {developers.map((developer: IUser) => (
            <DevCard
              key={developer._id}
              username={developer.username}
              role={developer.role}
              description={developer.description}
              technologies={developer.technologies.join(" | ")}
            />
          ))}
          <div className="turn">
            <h1>{right}</h1>
          </div>
        </div>
        <div className="explore-engage-container">
          <h1>Web Services at its finest.</h1>
          <h2>You imagine it. A programmer brings it to life.</h2>
          <div className="findwork-btn">
            <h3>Find Work Now</h3>
          </div>
        </div>
        <div className="explore-faq-container">
          <h1>Software Development FAQ</h1>
          <h4>We're here to help.</h4>
          <div className="faq-container">
            <div className="row-one-faq">
              <FaqAccordion
                title="What are the benefits of hiring freelance software engineers?"
                description="Freelancers offer flexibility, cost-effectiveness, and specialized skills. They can adapt to short-term projects and provide high-quality work without the overhead costs of a full-time employee."
              />
              <FaqAccordion
                title="How do I ensure the freelancer has the right skills for my project?"
                description="Review their portfolio, check client testimonials, and conduct technical interviews or skill assessments. Platforms like GitHub or LinkedIn can showcase their coding expertise."
              />
            </div>
            <div className="row-two-faq">
              <FaqAccordion
                title="What’s the average cost of hiring a freelance software engineer?"
                description="Costs vary based on experience, location, and project complexity. Rates can range from $30/hour for junior engineers to $200/hour for senior experts. Discuss and agree on a budget upfront."
              />
              <FaqAccordion
                title="How can I protect my project's confidentiality and IP?"
                description="Use a Non-Disclosure Agreement (NDA) and clearly outline intellectual property ownership in your contract. Most freelancers are accustomed to working under such agreements."
              />
            </div>
            <div className="row-three-faq">
              <FaqAccordion
                title="How do I manage communication and timelines effectively?"
                description="Use project management tools like Trello, Asana, or Jira, and establish clear communication channels (e.g., Slack or email). Set milestones and regular check-ins to track progress."
              />
              <FaqAccordion
                title="What happens if the freelancer doesn’t meet expectations?"
                description="Mitigate risks by starting with a smaller, paid test project. Clearly define deliverables in your contract, and use platforms with escrow systems to ensure payment is tied to satisfactory milestones."
              />
            </div>
          </div>
        </div>
      </PageTab>
    </div>
  );
};

export default Explore;
