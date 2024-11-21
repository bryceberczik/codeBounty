import "../css/home.css";
import PageTab from "../components/PageTab";
import { Link } from "react-router-dom";
import HappyCustomers from "../images/jpeg-frontpage-photo.jpg";
import auth from "../utils/auth";

const Home = () => {
  return (
    <div className="homepage-container">
      <PageTab title="Home">
        <div className="first-homepage-section">
          <div className="front-left">
            <div className="maintext-homepage">
              <h1>
                <span className="special-span">Building the future</span> for
                developers all over the world.
              </h1>
            </div>
            <div className="subtext-homepage">
              <p>
                Work with diverse clients worldwide to deliver innovative
                software solutions, leveraging modern technologies to meet
                unique needs and drive success.
              </p>
            </div>
            <div className="getstarted-container">
              {auth.loggedIn() ? (
                <Link to="/explore" className="no-link">
                  <div className="getstarted-btn">
                    <h1>Explore</h1>
                  </div>
                </Link>
              ) : (
                <Link to="/signup" className="no-link">
                  <div className="getstarted-btn">
                    <h1>Get Started</h1>
                  </div>
                </Link>
              )}

              <p>
                Learn about the developers behind codeBounty{" "}
                <Link to="/about-us" className="offset-line">
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
                <h3>Projects Done</h3>
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
              Offering full-stack development services to build modern,
              scalable, and efficient applications tailored to client needs.
            </p>
          </div>
          <div className="design-block">
            <h1>UX/UI Design</h1>
            <p>
              Providing expert UX/UI design services to create intuitive,
              user-centric interfaces that enhance engagement and deliver
              seamless digital experiences.
            </p>
          </div>
          <div className="database-block">
            <h1>Database Creation</h1>
            <p>
              Creating robust SQL and NoSQL databases designed for optimal
              performance, scalability, and seamless data organization tailored
              to client needs.
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
                Our clients are exceptional—clear, collaborative, and
                professional. They provide detailed requirements, offer
                constructive feedback, and foster a positive, creative
                environment. Working with them feels like a true partnership,
                making their projects rewarding for any freelance developer.
              </h3>
            </div>
            <div className="info-div">
              <h2>The Developers</h2>
              <h3>
                Our developers are efficient, reliable, and committed to
                delivering high-quality work on time. They prioritize clear
                communication, seek feedback, and adapt quickly to changes,
                ensuring your vision is met. Their dedication and focus make
                them an invaluable asset to any project.
              </h3>
            </div>
          </div>
        </div>
        <div className="fourth-container-section">
          <div className="join-us-section">
            <h1>
              Freelancing beyond your{" "}
              <span className="wildest-span">wildest</span> dreams.
            </h1>
            {auth.loggedIn() ? (
              <Link
                to="/find-work"
                className="no-dec"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="join-us-btn">
                  <h2>Find Work</h2>
                </div>
              </Link>
            ) : (
              <Link
                to="/signup"
                className="no-dec"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="join-us-btn">
                  <h2>Join us</h2>
                </div>
              </Link>
            )}
          </div>
        </div>
      </PageTab>
    </div>
  );
};

export default Home;
