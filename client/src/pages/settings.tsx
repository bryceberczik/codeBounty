import "../css/settings.css";

const Settings = () => {
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
          <button className="delete-user-btn">Delete Account</button>
        </div>
      </div>

      
    </div>
  );
};

export default Settings;