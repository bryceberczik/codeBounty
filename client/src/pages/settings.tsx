import { useState } from 'react';
import '../css/settings.css';

function SettingsPage() {
    const [settings, setSettings] = useState({
        theme: 'light',
        // notifications: true,
        language: 'en',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, checked } = event.target as HTMLInputElement;
        setSettings({
            ...settings,
            [name]: name === '' ? checked : value,
        });
    };

    return (
        <div>

            <h1 className='settingsTitle'>Settings</h1>

            <div className='settingsContainer'>

                <form className='settingsForm'>


                    <div>

                        <label className='themeLabel'>
                            Theme:
                        </label>

                    </div>

                    <div>

                        <select name="theme" className="lightDarkModeDropDown" value={settings.theme} onChange={handleInputChange}>

                            <option value="light">Light</option>
                            <option value="dark">Dark</option>

                        </select>

                    </div>



                    <button className='deleteUser'>Delete User</button>

                    <br />

                    {/* <label>
                        Notifications:
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleInputChange}
                        />
                    </label> */}

                    <br />

                    <button type="submit" className='saveSettings'>Save Settings</button>

                </form>

            </div>


        </div>
    );
}

export default SettingsPage;