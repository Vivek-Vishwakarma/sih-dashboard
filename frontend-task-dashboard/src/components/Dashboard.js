import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Box from '@mui/material/Box';

const Dashboard = () => {
  return (
    <div className="dash">
      <aside className="side">
        <Sidebar />
      </aside>
      <Box className="dashDiv">
        <h1>Welcome to Dashboard</h1>
      </Box>
    </div>
  );
};

export default Dashboard;
