import "../css/explore.css";
import DevCard from "../components/DevCard";

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
      <div className="explore-first-container">
        <div className="turn">
          <h1>{left}</h1>
        </div>
        <DevCard
          username="bryceberczik"
          role="Junior Front-end Developer"
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
    </div>
  );
};

export default Explore;
