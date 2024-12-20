import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Repositories</h1>
      <div className="header-controls">
        <button>Refresh All</button>
        <button>Add Repository</button>
      </div>
    </header>
  );
}

export default Header;
