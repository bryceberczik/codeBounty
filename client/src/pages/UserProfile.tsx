import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

import { Container, Row, Col } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import PageTab from "../components/PageTab";
import "../css/userprofile.css";

// Mock Technology Data
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

// Mock Link Data
const links = [
  "https://mattfarley.ca",
  "https://github.com/ZVKubajak",
  "https://chatgpt.com",
];

const UserProfile = ({ username }: { username: string }) => {
  const loggedInUser = Auth.getProfile().data.username;
  const isOwnProfile = loggedInUser === username;

  const { loading, data } = useQuery(isOwnProfile ? QUERY_ME : QUERY_USER, {
    variables: { username },
    skip: isOwnProfile,
  });

  if (loading) return <p>Loading...</p>;

  const user = data?.me || data?.user;

  //

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const [userName, setUserName] = useState("codingGuy123!");
  const [role, setRole] = useState("Web Developer");

  // View Technology Editing Tools
  const toggleLeftVisibility = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  // View Link Editing Tools
  const toggleRightVisibility = () => {
    setIsRightVisible(!isRightVisible);
  };

  // Changing Username
  const handleUsernameChange = (e: React.FormEvent<HTMLElement>) => {
    setUserName(e.currentTarget.innerText.trim());
  };

  // Changing Role
  const handleRoleChange = (e: React.FormEvent<HTMLElement>) => {
    setRole(e.currentTarget.innerText.trim());
  };

  return (
    <Container id="user-profile">
      <PageTab title="My Profile">
        <div id="profile-card">
          <h1
            contentEditable
            suppressContentEditableWarning
            onInput={handleUsernameChange}
          >
            {userName}
          </h1>
          <h2
            contentEditable
            suppressContentEditableWarning
            onInput={handleRoleChange}
          >
            {role}
          </h2>

          <p>
            Hello codeBounty! I am full-stack web developer looking for
            freelance work. I love working on backend applications and helping
            developers set up their APIs.
          </p>

          <Row>
            <Col md={6} style={{ position: "relative" }}>
              <h3>My Technologies:</h3>
              {isOwnProfile && (
                <button className="edit-button" onClick={toggleLeftVisibility}>
                  <FaRegEdit className="edit-icon" />
                </button>
              )}

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
              {isOwnProfile && (
                <button className="edit-button" onClick={toggleRightVisibility}>
                  <FaRegEdit className="edit-icon" />
                </button>
              )}

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
      </PageTab>
    </Container>
  );
};

export default UserProfile;
