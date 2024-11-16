import "../css/home.css";
import { Link } from "react-router-dom";
import HappyCustomers from "../images/jpeg-frontpage-photo.jpg";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="first-homepage-section">
        <div className="front-left">
          <div className="maintext-homepage">
            <h1>
              <span className="special-span">Building the future</span> for
              developers all over the world
            </h1>
          </div>
          <div className="subtext-homepage">
            <p>
              Work with diverse clients worldwide to deliver innovative software
              solutions, leveraging modern technologies to meet unique needs and
              drive success.
            </p>
          </div>
          <div className="getstarted-container">
            <div className="getstarted-btn">
              <h1>Get Started</h1>
            </div>
            <p>
              Learn about the developers behind codeBounty{" "}
              <Link to="/about-us" className="no-link">
                here
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="front-right">
          <div className="frontpage-photo">
            <img src={HappyCustomers} alt="happy customers with codeBounty" />
          </div>
          <div className="brand-stats">
            <div className="ind-stat">
              <h2>100+</h2>
              <h3>Projects done</h3>
            </div>
            <div className="ind-stat">
              <h2>2.5k</h2>
              <h3>Active Users</h3>
            </div>
            <div className="ind-stat">
              <h2>200+</h2>
              <h3>Databases Created</h3>
            </div>
            <div className="ind-stat">
              <h2>1.5k</h2>
              <h3>Happy Customers</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="second-homepage-section">
        <div className="fullstack-block">
          <h1>Full Stack Development</h1>
          <p>
            Offering full-stack development services to build modern, scalable,
            and efficient applications tailored to client needs.
          </p>
        </div>
        <div className="design-block">
          <h1>UX/UI Design</h1>
          <p>
            Providing expert UX/UI design services to create intuitive,
            user-centric interfaces that enhance engagement and deliver seamless
            digital experiences.
          </p>
        </div>
        <div className="database-block">
          <h1>Database Creation</h1>
          <p>
            Creating robust SQL and NoSQL databases designed for optimal
            performance, scalability, and seamless data organization tailored to
            client needs.
          </p>
        </div>
      </div>
      <div className="third-homepage-section">
        <h1>Why choose codeBounty?</h1>
        <p>We'll tell you why.</p>
        <div className="info-container">
          <div className="info-div">
            <h2>Our Clients</h2>
            <h3>
              Our clients are truly exceptional and a dream to work with for any
              freelance developer. They are not only highly communicative,
              providing clear and detailed project requirements, but also
              collaborative, offering constructive feedback that helps elevate
              the quality of the work. Their professionalism and understanding
              create a positive and productive environment where creativity and
              innovation thrive. Working with them feels less like a transaction
              and more like a partnership, where your skills are valued and your
              efforts are appreciated. If you're a freelance developer seeking
              fulfilling projects and a rewarding experience, you'll find our
              clients to be the perfect match.
            </h3>
          </div>
          <div className="info-div">
            <h2>The developers</h2>
            <h3>
              Our developers are incredibly efficient and dedicated to
              delivering high-quality work on time. They prioritize constant
              communication, keeping you updated on every step of the process
              and actively seeking your feedback to ensure the project aligns
              with your vision. Whether it's making adjustments or incorporating
              new ideas, they are responsive and flexible, never missing a beat.
              You can count on them to be proactive, diligent, and focused,
              ensuring that the job gets done exactly when you need it, without
              compromise. Their commitment to excellence and collaboration makes
              them a reliable and valuable asset to any project.
            </h3>
          </div>
        </div>
      </div>
      <div className="fourth-container-section">
        <div className="join-us-section">
          <h1>
            Freelancing beyond your{" "}
            <span className="wildest-span">wildest</span> dreams
          </h1>
          <Link to="/signup" className="no-dec">
            <div className="join-us-btn">
              <h2>Join us</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
