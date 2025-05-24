import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <Content
            title="About Us"
            text="I am David Xander Wagan and I am passionate developer. I love building awesome web apps using modern technologies."
          />
        );
      case "contact":
        return (
          <Content
            title="Contact"
            text="You can reach me at david.wagan@ciit.edu.ph or call us at (123) 456-7890."
          />
        );
      default:
        return (
          <Content
            title="Hello World!"
            text="Welcome to my simple React SPA. Click the tabs above to explore more sections."
          />
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-wrapper">{renderContent()}</div>
    </div>
  );
}

export default App;


