import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="dash">
        <aside className="side">
          <Sidebar />
        </aside>
        <Box className="dashDiv">
          
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
