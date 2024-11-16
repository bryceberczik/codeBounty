import "../css/header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const currentPage = useLocation().pathname;
  return (
    <div>
      <header>
        <div className="header-left">
          <h1>codeBounty</h1>
        </div>
        <div className="header-center">
          <Link
            to="/" className="no-underline">
            <h1 className={currentPage === "/" ? "activeNav" : "restNav"}>Home</h1>
          </Link>
          <Link
            to="/explore" className="no-underline">
            <h1 className={currentPage === "/explore" ? "activeNav" : "restNav"}>Explore</h1>
          </Link>
          <Link
            to="/find-work" className="no-underline">
            <h1 className={currentPage === "/find-work" ? "activeNav" : "restNav"}>Find work</h1>
          </Link>
          <Link
            to="/post-listing" className="no-underline">
            <h1 className={currentPage === "/post-listing" ? "activeNav" : "restNav"}>Post a job</h1>
          </Link>
          <Link
            to="/about-us" className="no-underline">
            <h1 className={currentPage === "/about-us" ? "activeNav" : "restNav"}>About</h1>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/signup" className="no-link">
          <div className="signup-btn">
            <h1>Sign up</h1>
          </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
