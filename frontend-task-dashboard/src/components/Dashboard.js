import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";

const Dashboard = () => {
  return (
    <div className="dash">
      <aside className="side">
        <Sidebar />
      </aside>
      <div className="dashDiv">hello</div>
    </div>
  );
};

export default Dashboard;
