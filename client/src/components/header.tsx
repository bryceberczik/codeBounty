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
          <Link to='/' className={currentPage === "/" ? "activeNav" : "restNav"}>
          <h1 className="category-nav">Home</h1>
          </Link>
          <Link to='/explore' className={currentPage === "/explore" ? "activeNav" : "restNav"}>
          <h1 className="category-nav">Explore</h1>
          </Link>
          <Link to='/find-work' className={currentPage === "/find-work" ? "activeNav" : "restNav"}>
          <h1 className="category-nav">Find work</h1>
          </Link>
          <Link to='/post-listing' className={currentPage === "/post-listing" ? "activeNav" : "restNav"}>
          <h1 className="category-nav">Post a job</h1>
          </Link>
          <Link to='/about-us' className={currentPage === "/about-us" ? "activeNav" : "restNav"}>
          <h1 className="category-nav">About</h1>
          </Link>
        </div>
        <div className="header-right">
          <div className="signup-btn">
            <h1>Sign up</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
