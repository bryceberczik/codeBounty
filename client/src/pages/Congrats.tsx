import { useLocation, Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import "../css/congrats.css";

const Congrats = () => {
  const location = useLocation();
  const { username, email } = location.state || {};

  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  let isAccepted = true;

  if (!username || !email) {
    isAccepted = false;
  }

  return (
    <div className="congrats-container">
      {isAccepted ? (
        <div>
          {confettiActive && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          <h1 className="congrats-text">Congratulations!</h1>
          <div className="congrats-div">
            <h1>You have accepted {username}'s request!</h1>
            <p>
              You can contact them at{" "}
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href={`mailto:${email}`}
              >
                {email}
              </a>
              .
            </p>
            <p>We have removed the listing for you, keep up the great work!</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="back-home">
                <h1 style={{ textDecoration: "underline" }}>Continue</h1>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="lost-container">
          <h1>Looks like you're lost...</h1>
          <p>We'll take it from here!</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="back-home">
              <h1>Go Back</h1>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Congrats;
