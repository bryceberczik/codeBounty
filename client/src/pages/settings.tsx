import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";
import { Modal, Button } from "react-bootstrap";
import "../css/settings.css";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  const [deleteUser] = useMutation(DELETE_USER);
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me;

  const handleShowModal = async () => {
    try {
      const userId = user._id;
      console.log(userId);

      handleDeleteUser(userId);
    } catch (error) {
      console.error("handleShowModal Error:", error);
    }
  };

  // const handleCloseModal = () => setShowModal(false);

  const handleDeleteUser = async (userId: string) => {
    console.log(userId);

    await deleteUser({
      variables: {
        id: userId,
      },
    });

    alert(`Your account has been deleted. Hope to see you again soon!`);
  };

  if (loading) return <p style={{ paddingBottom: "1000px" }}>Loading...</p>;

  return (
    <div className="settings-div">
      <h1>Settings</h1>
      <div className="settings-container">
        <div className="setting-opt">
          <h3>Theme Switch</h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-opt">
          <h3>Account Deletion</h3>
          <button onClick={() => handleShowModal()} className="delete-user-btn">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
