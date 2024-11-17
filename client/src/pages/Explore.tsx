import "../css/explore.css";
import DevCard from "../components/DevCard";
import FaqAccordion from "../components/FaqAccordion";

const Explore = () => {
  const technologies1 = ["React.js", "Typescript", "Python", "+3 More"].join(
    " | "
  );
  const technologies2 = ["Figma", "Azure", "React", "+1 More"].join(" | ");
  const technologies3 = ["SQL", "noSQL", "Python", "+2 More"].join(" | ");

  const left = "<";
  const right = ">";

  return (
    <div className="explore-container">
      <div className="intro-text-explore">
        <h1>Top Rated Sellers</h1>
      </div>
      <div className="explore-users-container">
        <div className="turn">
          <h1>{left}</h1>
        </div>
        <DevCard
          username="code_maker2005"
          role="Junior Front-End Developer"
          description="
I absolutely love coding—it's more than just a passion; it feels like a calling. The thrill of solving problems, creating something from nothing, and watching my ideas come to life is unmatched. Every line of code feels like a piece of a puzzle falling into place, and I can’t get enough of it! It’s so much fun that I often find myself comple... [See more]"
          technologies={[technologies1]}
        />
        <DevCard
          username="data_guru98"
          role="Data Analyst"
          description="Working with data is like solving a mystery, uncovering hidden stories and insights buried in numbers. I enjoy finding patterns, visualizing trends, and translating complex datasets into actionable strategies. The joy of seeing data make a tangible impact on decisions is incredibly rewarding. It’s a dynamic field that ke... [See more]"
          technologies={[technologies3]}
        />
        <DevCard
          username="design_dreamer"
          role="UI/UX Designer"
          description="Designing intuitive and visually stunning interfaces is what drives me. I have a knack for understanding user needs and turning them into seamless digital experiences. Whether it's wireframing or perfecting the final pixel, every step excites me. Creating designs that solve problems and delight users is my version of sto... [See more]"
          technologies={[technologies2]}
        />
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
    </div>
  );
};

export default Explore;
