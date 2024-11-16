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
            <h1>test</h1>
        </div>
        <div className="design-block"></div>
        <div className="database-block"></div>
      </div>
    </div>
  );
};

export default Home;
