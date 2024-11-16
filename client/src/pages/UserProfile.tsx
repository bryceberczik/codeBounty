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

  const links = [
    "https://mattfarley.ca",
    "https://github.com/ZVKubajak",
    "https://chatgpt.com",
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

        <Row>
          <Col md={6}>
            <h3>My Technologies:</h3>

            <Row>
              {technologies.map((tech, index) => (
                <Col key={index} sm={12} md={4} className="mb-3">
                  <div className="tech-box">{tech}</div>
                </Col>
              ))}
            </Row>

            <Row>
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
          </Col>

          <Col md={6}>
            <h3>My Work:</h3>

            <Row>
              {links.map((link, index) => (
                <Col key={index} sm={12} md={12} className="mb-3">
                  <div className="link-box">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserProfile;
