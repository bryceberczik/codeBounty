import { useState } from 'react';

function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    language: 'en',
  });

  const handleInputChange = (event: any) => {
    const { name, value, checked } = event.target;
    setSettings({
      ...settings,
      [name]: name === 'notifications' ? checked : value,
    });
  };

  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label>
          Theme:
          <select name="theme" value={settings.theme} onChange={handleInputChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <br />
        <label>
          Notifications:
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default SettingsPage;