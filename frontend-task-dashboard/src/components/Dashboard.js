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
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { MenuItem } from "@mui/material";
import Popup from "./Popup";
import { AiTwotoneDelete } from "react-icons/ai";

const Dashboard = () => {
  const [task, setTask] = useState();
  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [rerender, setRerender] = useState(false);
  const [user, setUser] = useState("");
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
          setTask(response.data.task);
          setUser(response.data.user)
        });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = (e) => {
    var results = window.confirm("Are u sure u want to delete this file");
    if (results) {
      axios
        .delete(`http://localhost:5000/api/task/delete/${e}`, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          setRerender(!rerender);
          alert("Deleted succesfully")
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else{
      console.log("okay")
    }
  };

  useEffect(() => {
    getTasks();
  }, [rerender]);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="dash">
      <aside className="side">
        <Sidebar user={true} dashPath="/dashboard" newTaskPath="/newtask"/>
      </aside>
      <Box className="dashDiv">
        <Typography variant="h4" align="center" sx={{ mt: 5 }}>
          Welcome {user}
        </Typography>
        <Container sx={{ mt: 5 }}>
          <TextField
            id="outlined-name"
            label="Search ..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <FormControl sx={{ width: "200px", marginLeft: "20px" }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "200px", marginLeft: "20px" }}>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Priority"
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Moderate">Moderate</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Container>
        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Priority</TableCell>
                <TableCell align="center">Approver Name</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">File</TableCell>
                <TableCell align="center">Edit/Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {task &&
                task
                  // eslint-disable-next-line
                  .filter((event) => {
                    if (search === "") return event;
                    else if (
                      event.filename
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return event;
                    }
                  })
                  // eslint-disable-next-line
                  .filter((e) => {
                    if (filterStatus === "") return e;
                    else if (e.status === filterStatus) {
                      return e;
                    } else if (e.status === filterStatus) {
                      return e;
                    }
                  })
                  // eslint-disable-next-line
                  .filter((e) => {
                    if (priority === "") return e;
                    else if (e.priority === priority) {
                      return e;
                    } else if (e.priority === priority) {
                      return e;
                    }
                  })
                  .map((element) => {
                    return (
                      <TableRow
                        key={element.file}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {capitalizeFirstLetter(element.filename)}
                        </TableCell>
                        <TableCell align="center">
                          {capitalizeFirstLetter(element.description)}
                        </TableCell>

                        <TableCell align="center">
                          <Chip
                            label={element.priority}
                            color={
                              element.priority === "High"
                                ? "error"
                                : element.priority === "Moderate"
                                ? "warning"
                                : "success"
                            }
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          style={{
                            color: element.success
                              ? "#2e7d32"
                              : "rgb(211 47 47)",
                            fontWeight: "bold",
                          }}
                        >
                          {element.success ? "Evaluated" : "Not Evaluated"}
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={element.status}
                            color={
                              element.status === "Pending" ? "error" : "success"
                            }
                          />
                        </TableCell>
                        <TableCell align="center">
                          <a
                            target="blank"
                            href={`http://localhost:5000/${element.file}`}
                          >
                            View
                          </a>
                        </TableCell>
                        <TableCell
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                          align="center"
                        >
                          <Popup />
                          <AiTwotoneDelete
                            onClick={() => {
                              deleteTask(element._id);
                            }}
                            style={{ cursor: "pointer", color: "#d32f2f" }}
                            fontSize={30}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Dashboard;
