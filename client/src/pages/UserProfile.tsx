import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import "../css/userprofile.css";

const UserProfile = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

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

  const toggleLeftVisibility = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  const toggleRightVisibility = () => {
    setIsRightVisible(!isRightVisible);
  };

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
          <Col md={6} style={{ position: "relative" }}>
            <h3>My Technologies:</h3>
            <button className="edit-button" onClick={toggleLeftVisibility}>
              <FaRegEdit className="edit-icon" />
            </button>

            <Row>
              {technologies.map((tech, index) => (
                <Col key={index} sm={12} md={4} className="mb-3">
                  <div className="tech-box">{tech}</div>
                </Col>
              ))}
            </Row>

            {isLeftVisible && (
              <Row>
                <Col md={11}>
                  <Form className="input-field">
                    <Form.Group>
                      <Form.Control
                        className="edit-input"
                        type="text"
                        placeholder="Enter Technology"
                      />
                    </Form.Group>
                  </Form>
                </Col>
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
            )}
          </Col>

          <Col md={6} style={{ position: "relative" }}>
            <h3>My Work:</h3>
            <button className="edit-button" onClick={toggleRightVisibility}>
              <FaRegEdit className="edit-icon" />
            </button>

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

            {isRightVisible && (
              <Row>
                <Col md={11}>
                  <Form className="input-field">
                    <Form.Group>
                      <Form.Control
                        className="edit-input"
                        type="text"
                        placeholder="Enter Link"
                      />
                    </Form.Group>
                  </Form>
                </Col>
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
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UserProfile;
