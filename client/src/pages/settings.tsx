import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/settings.css";
import "../css/header.css";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme
  const navigate = useNavigate();

  const [deleteUser] = useMutation(DELETE_USER);
  const { loading, data } = useQuery(QUERY_ME);
  const userId = data?.me._id;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser({
        variables: {
          id: userId,
        },
      });

      localStorage.removeItem("id_token");

      alert(`Your account has been deleted. Hope to see you again soon!`);

      navigate("/");
    } catch (error) {
      console.error("Error Deleting User:", error);
    }
  };

  // Theme toggle logic
  const themeToggle = () => {
    const newTheme = !isDarkMode ? "dark" : "light"; // Toggle the theme
    setIsDarkMode(!isDarkMode); // Update state
    document.body.classList.toggle("dark", !isDarkMode); // Add/remove class
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
    window.location.reload(); // Refresh the screen
  };

  // Apply the saved theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []); // Run only once when the component mounts

  if (loading) return <p style={{ paddingBottom: "1000px" }}>Loading...</p>;

  return (
    <div className="settings-div">
      <h1>Settings</h1>
      <div className="settings-container">
        <div className="setting-opt">
          <h3>Theme Switch</h3>
          <label className="switch">
            <input
              type="checkbox"
              onChange={themeToggle}
              checked={isDarkMode} // Bind to state
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-opt">
          <h3>Account Deletion</h3>
          <button onClick={handleShowModal} className="delete-user-btn">
            Delete Account
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete your account?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={() => handleDeleteUser(userId)}>Confirm</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Settings;
