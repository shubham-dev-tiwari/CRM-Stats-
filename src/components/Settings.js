import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light"); // Example setting for theme
  const [notifications, setNotifications] = useState(true); // Example setting for notifications

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // Logic to update theme can go here
  };

  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
    // Logic to update notification preferences can go here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      {/* Theme Selection */}
      <div className="flex flex-col mb-4">
        <label className="font-medium mb-2">Theme:</label>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="p-2 border rounded-lg"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Notification Settings */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={notifications}
          onChange={handleNotificationChange}
          className="mr-2"
        />
        <label className="font-medium">Enable Notifications</label>
      </div>

      {/* Additional Settings */}
      {/* Add more settings options here */}
    </div>
  );
};

export default Settings;
