import "../css/header.css";
import { type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const logout = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    auth.logout();
  };
  const currentPage = useLocation().pathname;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <header>
        <div className="header-left">
          <h1>codeBounty</h1>
        </div>
        <div className="header-center">
          <div className="category-item">
            <Link to="/" className="no-underline">
              <h1 className={currentPage === "/" ? "activeNav" : "restNav"}>
                Home
              </h1>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/explore" className="no-underline">
              <h1
                className={currentPage === "/explore" ? "activeNav" : "restNav"}
              >
                Explore
              </h1>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/find-work" className="no-underline">
              <h1
                className={
                  currentPage === "/find-work" ? "activeNav" : "restNav"
                }
              >
                Find Work
              </h1>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/post-listing" className="no-underline">
              <h1
                className={
                  currentPage === "/post-listing" ? "activeNav" : "restNav"
                }
              >
                Post a Job
              </h1>
            </Link>
          </div>
          <div className="category-item">
            <Link to="/about-us" className="no-underline">
              <h1
                className={
                  currentPage === "/about-us" ? "activeNav" : "restNav"
                }
              >
                About
              </h1>
            </Link>
          </div>
        </div>
        <div className="header-right">
          {auth.loggedIn() ? (
            <div className="loggedin-container" onClick={handleShow}>
              <h1>{auth.getProfile().data.username}</h1>
              <div className="profile-pic-container">
                <FontAwesomeIcon icon={faUser} className="profile-pic" />
              </div>
            </div>
          ) : (
            <Link to="/signup" className="no-link">
              <div className="signup-btn">
                <h1>Sign up</h1>
              </div>
            </Link>
          )}
        </div>
      </header>

      {auth.loggedIn() ? (
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Hey, {auth.getProfile().data.username}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to="/me" className="offcanvas-opt">My Profile</Link>
            <Link to="/settings" className="offcanvas-opt">Settings</Link>
            <Link to="/find-work" className="offcanvas-opt">Find work</Link>
            <div className="logout-btn" onClick={logout}>
              <h1>Log out</h1>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
