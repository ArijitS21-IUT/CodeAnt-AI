import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">CodeAnt AI</div>
      <ul className="menu">
        <li>Repositories</li>
        <li>AI Code Review</li>
        <li>Cloud Security</li>
        <li>How to Use</li>
        <li>Settings</li>
        <li>Support</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
