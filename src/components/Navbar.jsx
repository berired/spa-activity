import React from "react";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="navbar">
      <button
        className={activeTab === "home" ? "active" : ""}
        onClick={() => setActiveTab("home")}
      >
        Home
      </button>
      <button
        className={activeTab === "about" ? "active" : ""}
        onClick={() => setActiveTab("about")}
      >
        About Us
      </button>
      <button
        className={activeTab === "contact" ? "active" : ""}
        onClick={() => setActiveTab("contact")}
      >
        Contact
      </button>
    </div>
  );
}

export default Navbar;
