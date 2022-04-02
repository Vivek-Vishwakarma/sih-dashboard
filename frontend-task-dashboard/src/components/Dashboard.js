import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
const theme = createTheme();
const Dashboard = () => {
  const [task, setTask] = useState([]);
  const getTasks = () => {
    try {
      axios
        .get("http://localhost:5000/api/task/tasks", {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          setTask(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="dash">
        <aside className="side">
          <Sidebar />
        </aside>
        <Container>
          <Box className="dashDiv">
            <h1>Welcome to Dashboard</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Priority</TableCell>
                    <TableCell align="right">Success</TableCell>
                    <TableCell align="right">File</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {task &&
                    task.map((element) => {
                      return (
                        <TableRow
                          key={element.file}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {element.filename}
                          </TableCell>
                          <TableCell align="right">
                            {element.description}
                          </TableCell>
                          <TableCell align="right">{element.status}</TableCell>
                          <TableCell align="right">
                            {element.priority}
                          </TableCell>
                          <TableCell align="right">
                            {element.success ? "done" : "notdone"}
                          </TableCell>
                          <TableCell align="right">
                            <a
                              target="blank"
                              href={`http://localhost:5000/${element.file}`}
                            >
                              view
                            </a>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
