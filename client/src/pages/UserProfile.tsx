import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import PageTab from "../components/PageTab";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import "../css/userprofile.css";

interface IUserProfile {
  username: string;
  role: string;
  description: string;
  technologies: string[];
  links: string[];
}

const UserProfile = ({ username }: { username?: string }) => {
  const { username: paramsUsername } = useParams();
  const loggedInUser = Auth.getProfile().data.username;

  // * Gets a username from either the URL params (user's profile) or the logged-in user's token (my profile).
  const displayedUsername = username || paramsUsername || loggedInUser;

  if (!displayedUsername) {
    return <p>Error: No username available.</p>;
  }

  // * isOwnProfile is a boolean that checks if the profile being visited is the logged-in user's profile. When this is true, the user gets access to the editing tools.
  const isOwnProfile = loggedInUser === username;

  const { loading, data } = useQuery(isOwnProfile ? QUERY_ME : QUERY_USER, {
    variables: isOwnProfile ? undefined : { username: displayedUsername },
    skip: !displayedUsername,
  });

  // * userId for UPDATE_USER mutation.
  const userId = data?.me?._id;

  const [updateUser] = useMutation(UPDATE_USER);

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const [techInput, setTechInput] = useState("");
  const [linkInput, setLinkInput] = useState("");

  const [user, setUser] = useState<IUserProfile | null>(null);

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertVariant, setAlertVariant] = useState<string>("success");

  useEffect(() => {
    if (data?.me || data?.user) {
      setUser(data.me || data.user);
    }
  }, [data]);

  // * View Technology Editing Tools
  const toggleLeftVisibility = () => setIsLeftVisible(!isLeftVisible);
  // * View Link Editing Tools
  const toggleRightVisibility = () => setIsRightVisible(!isRightVisible);

  // ! Handle Add Technology
  const handleAddTechnology = (tech: string) => {
    if (!user) return;

    if (user.technologies.length === 15) {
      setAlertMessage("You have reached the limit for technologies displayed.");
      setAlertVariant("danger");
      return;
    }

    if (tech.length > 12) {
      setAlertMessage("Technology cannot be more than 12 characters.");
      setAlertVariant("danger");
      return;
    } else if (!tech.trim()) {
      setAlertMessage("Technology cannot be nothing.");
      setAlertVariant("danger");
      return;
    }

    if (user.technologies.includes(tech)) {
      setAlertMessage("This technology is already listed.");
      setAlertVariant("danger");
      return;
    }

    setUser({
      ...user,
      technologies: [...user.technologies, tech],
    });
  };

  // ! Handle Delete Technology
  const handleDeleteTechnology = (tech: string) => {
    if (!user) return;

    if (!tech.trim()) {
      setAlertMessage("Please enter a valid technology to delete.");
      setAlertVariant("danger");
      return;
    }

    if (!user.technologies.includes(tech)) {
      setAlertMessage("This technology does not exist on your list.");
      setAlertVariant("danger");
      return;
    }

    setUser({
      ...user,
      technologies: user.technologies.filter((t) => t !== tech),
    });
  };

  // ! Handle Add Link
  const handleAddLink = (link: string) => {
    if (!user) return;

    if (user.links.length === 5) {
      setAlertMessage("You have reached the limit for links displayed.");
      setAlertVariant("danger");
      return;
    }

    if (link.length > 80) {
      setAlertMessage("Link cannot be more than 80 characters.");
      setAlertVariant("danger");
      return;
    } else if (!link.trim()) {
      setAlertMessage("Link can not be nothing.");
      setAlertVariant("danger");
      return;
    }

    if (user.links.includes(link)) {
      setAlertMessage("This link is already listed.");
      setAlertVariant("danger");
      return;
    }

    setUser({
      ...user,
      links: [...user.links, link],
    });
  };

  // ! Handle Delete Link
  const handleDeleteLink = (link: string) => {
    if (!user) return;

    if (!link.trim()) {
      setAlertMessage("Please enter a valid link to delete.");
      setAlertVariant("danger");
      return;
    }

    if (!user.technologies.includes(link)) {
      setAlertMessage("This link does not exist on your list.");
      setAlertVariant("danger");
      return;
    }

    setUser({
      ...user,
      links: user.links.filter((l) => l !== link),
    });
  };

  // * This function takes in any new changes made by the user and saves it to the account.
  const handleSave = () => {
    if (!user) return;

    const usernameInput =
      document.getElementById("username-profile-input")?.innerText ||
      user?.username;

    const roleInput =
      document.getElementById("role-profile-input")?.innerText || user?.role;

    const descriptionInput =
      document.getElementById("description-profile-input")?.innerText ||
      user?.description;

    if (usernameInput.length > 20) {
      setAlertMessage("Your username cannot exceed 20 characters.");
      setAlertVariant("danger");
      return;
    } else if (usernameInput.length < 8) {
      setAlertMessage("Your username cannot be less than 8 characters.");
      setAlertVariant("danger");
      return;
    }

    if (roleInput !== null) {
      if (roleInput.length > 24) {
        setAlertMessage("Your role cannot exceed 24 characters.");
        setAlertVariant("danger");
        return;
      }
    }

    if (descriptionInput !== null) {
      if (descriptionInput.length > 300) {
        setAlertMessage("Your description cannot exceed 300 characters.");
        setAlertVariant("danger");
        return;
      }
    }

    const updatedUserData = {
      username: usernameInput,
      role: roleInput,
      description: descriptionInput,
      technologies: user.technologies,
      links: user.links,
    };

    updateUser({
      variables: {
        input: {
          _id: userId,
          ...updatedUserData,
        },
      },
    }).then(() => setAlertMessage("Profile updated successfully!"));
    setAlertVariant("success");
  };

  // ! Loading Screen
  if (loading) return <p style={{ paddingBottom: "1000px" }}>Loading...</p>;

  return (
    <Container id="user-profile">
      <PageTab
        title={isOwnProfile ? "My Profile" : `${user?.username}'s Profile`}
      >
        {alertMessage && (
          <Alert
            className="alert-back"
            variant={alertVariant}
            onClose={() => setAlertMessage(null)}
            dismissible
          >
            {alertMessage}
          </Alert>
        )}
        <div className="username-role">
          <h1
            id="username-profile-input"
            suppressContentEditableWarning={true}
            contentEditable={isOwnProfile}
            onInput={(e) => {
              if (e.currentTarget.innerText.length > 20) {
                setAlertMessage("Your username cannot exceed 20 characters.");
                setAlertVariant("danger");
              } else if (e.currentTarget.innerText.length < 8) {
                setAlertMessage(
                  "Your username cannot be less than 8 characters."
                );
                setAlertVariant("danger");
              } else {
                setAlertMessage(null);
              }
            }}
          >
            {user?.username}
          </h1>
          <h2
            id="role-profile-input"
            suppressContentEditableWarning={true}
            contentEditable={isOwnProfile}
            onInput={(e) => {
              if (e.currentTarget.innerText.length > 24) {
                setAlertMessage("Your role cannot exceed 24 characters.");
                setAlertVariant("danger");
              } else {
                setAlertMessage(null);
              }
            }}
          >
            {user?.role}
          </h2>
        </div>
        <div id="profile-card">
          <h3>Description:</h3>
          <div className="first-sect-profile">
            <div className="descr-container">
              <p
                id="description-profile-input"
                suppressContentEditableWarning={true}
                contentEditable={isOwnProfile}
                onInput={(e) => {
                  if (e.currentTarget.innerText.length > 300) {
                    setAlertMessage(
                      "Your description cannot exceed 300 characters."
                    );
                    setAlertVariant("danger");
                  } else {
                    setAlertMessage(null);
                  }
                }}
              >
              {user?.description}
              </p>
            </div>
          </div>

          <Row>
            <Col md={6} style={{ position: "relative" }}>
              <h3>My Technologies:</h3>
              {isOwnProfile && (
                <button className="edit-button" onClick={toggleLeftVisibility}>
                  <FaRegEdit className="edit-icon" />
                </button>
              )}

              <Row>
                {user?.technologies?.map((tech: string, index: number) => (
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
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                          onInput={(e) => {
                            if (e.currentTarget.value.length > 12) {
                              setAlertMessage(
                                "Your technology cannot exceed 12 characters."
                              );
                              setAlertVariant("danger");
                            } else {
                              setAlertMessage(null);
                            }
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="info"
                      className="list-button"
                      onClick={() => {
                        handleAddTechnology(techInput);
                        setTechInput("");
                      }}
                    >
                      Add
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="danger"
                      className="list-button"
                      onClick={() => {
                        handleDeleteTechnology(techInput);
                        setTechInput("");
                      }}
                    >
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
                {user?.links?.map((link: string, index: number) => (
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
                          value={linkInput}
                          onChange={(e) => setLinkInput(e.target.value)}
                          onInput={(e) => {
                            if (e.currentTarget.value.length > 80) {
                              setAlertMessage(
                                "Your link cannot exceed 80 characters."
                              );
                              setAlertVariant("danger");
                            } else {
                              setAlertMessage(null);
                            }
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="info"
                      className="list-button"
                      onClick={() => {
                        handleAddLink(linkInput);
                        setLinkInput("");
                      }}
                    >
                      Add
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="danger"
                      className="list-button"
                      onClick={() => {
                        handleDeleteLink(linkInput);
                        setLinkInput("");
                      }}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>

          {isOwnProfile && (
            <Button id="save-changes-button" onClick={handleSave}>
              Save Changes
            </Button>
          )}
        </div>
      </PageTab>
    </Container>
  );
};

export default UserProfile;
