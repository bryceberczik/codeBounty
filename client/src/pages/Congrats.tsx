import { useLocation, Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import "../css/congrats.css";

const Congrats = () => {
  const location = useLocation();
  const { username, email } = location.state || {};

  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 5000);
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
            <p>You can contact them at {email}.</p>
            <p>We have removed the listing for you, keep up the great work!</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="back-home">
                <h1>Back home</h1>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <h1>YOU SUCK</h1>
      )}
    </div>
  );
};

export default Congrats;
