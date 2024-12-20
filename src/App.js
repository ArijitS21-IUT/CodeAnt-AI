import React from "react";
import './style.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RepositoryList from "./components/RepositoryList";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <RepositoryList />
      </div>
    </div>
  );
}

export default App;
