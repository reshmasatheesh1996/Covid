import React from "react";

function Sidebar() {
  const sidebarStyles = {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    height: "100vh",
    backgroundColor: "#3f51b5", // Sidebar color
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff", // Text color for white contrast
  };

  const profileStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#283593", // Separate background color for profile section
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for highlighting
    transition: "all 0.3s ease", // Smooth transition for hover effect
  };

  const profileImageStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const profileNameStyles = {
    fontSize: "1rem",
    fontWeight: "500",
  };

  const listStyles = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    padding: "10px 0",
    cursor: "pointer",
    fontSize: "1rem",
    color: "#fff", // White text for better contrast
    transition: "background-color 0.2s",
  };

  const listItemHoverStyle = {
    backgroundColor: "#f1f1f1", // Light hover effect for white text contrast
  };

  const upgradeStyles = {
    marginTop: "auto",
    textAlign: "center",
  };

  const buttonStyles = {
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  const handleDashboardClick = () => {
    console.log("Dashboard clicked!");
  };

  return (
    <div style={sidebarStyles}>
      <div
        style={profileStyles}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1a237e")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#283593")}
      >
        <img
          src="https://i.pravatar.cc/150?img=3" // Sample profile image URL
          alt="Profile"
          style={profileImageStyles}
        />
        <span style={profileNameStyles}>John Doe</span>
      </div>
      <ul style={listStyles}>
        <li
          style={listItemStyle}
          onClick={handleDashboardClick}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#303f9f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Dashboard
        </li>
        <li
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#303f9f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          User
        </li>
        {/* Add more list items as needed */}
      </ul>
      
    </div>
  );
}

export default Sidebar;
