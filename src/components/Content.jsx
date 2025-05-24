import React from "react";

function Content({ title, text }) {
  return (
    <div className="content">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>
        This is a simple React Single Page Application (SPA) example.
      </p>
      <p>
        It demonstrates how to create a basic SPA with React, including a header, navigation bar.
      </p>
    </div>
  );
}

export default Content;

