import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../css/userprofile.css";

const UserProfile = () => {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Git",
    "HTML",
    "CSS",
  ];

  return (
    <Container id="user-profile">
      <div id="profile-card">
        <h1>UserProfile123</h1>
        <h2>Web Developer</h2>

        <p>
          Hello codeBounty! I am full-stack web developer looking for freelance
          work. I love working on backend applications and helping developers
          set up their APIs.
        </p>

        <h3>My Technologies:</h3>

        <Row style={{ width: "50%" }}>
          {technologies.map((tech, index) => (
            <Col key={index} sm={12} md={4} className="mb-3">
              <div className="tech-box">{tech}</div>
            </Col>
          ))}
        </Row>

        <Row style={{ width: "50%" }}>
          <Col md={6}>
            <Button variant="info" className="list-button">
              Add
            </Button>
          </Col>
          <Col md={6}>
            <Button variant="danger" className="list-button">
              Delete
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserProfile;
