import { Link } from "react-router-dom";
import "../css/devcard.css";

interface DevCardProps {
  username: string;
  role: string;
  technologies: string;
  description: string;
}

const DevCard = ({
  username,
  role,
  description,
  technologies,
}: DevCardProps) => {
  return (
    <div className="card-container">
      <div className="username-container">
        <h1>{username}</h1>
      </div>
      <div className="role-container">
        <h3>{role}</h3>
      </div>
      <div className="description-container">
        <p>{description}</p>
      </div>
      <div className="openprofile-btn">
        <Link to={`/profiles/${username}`} style={{ textDecoration: "none" }}>
          <h1>Open Profile</h1>
        </Link>
      </div>
      <div className="technologies-container">
        <p>{technologies}</p>
      </div>
    </div>
  );
};

export default DevCard;
