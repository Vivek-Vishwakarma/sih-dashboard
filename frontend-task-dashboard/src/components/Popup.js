import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiFillEdit } from "react-icons/ai";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import "../App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import Sidebar from "./Sidebar";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Popup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [task, setTask] = useState({
    filename: "",
    description: "",
    file: "",
    department: "",
    priority: "",
  });
  const postFile = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("filename", task.filename);
    formData.append("description", task.description);
    formData.append("status", task.status);
    formData.append("file", task.file);
    formData.append("priority", task.priority);
    formData.append("department", task.department);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/task/newtask",
        formData,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      alert("Profile Added Sucessfully !!");
    } catch (error) {
      console.log(error);
    }
  };
  const handleFile = (e) => {
    setTask({ ...task, file: e.target.files[0] });
  };
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <AiFillEdit
        onClick={handleOpen}
        fontSize={30}
        style={{ cursor: "pointer", color: "#2e7d32" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Edit File
              </Typography>
              <Box component="form" onSubmit={postFile} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="off"
                      name="filename"
                      required
                      fullWidth
                      onChange={handleChange}
                      id="firstName"
                      label="File Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="off"
                      name="description"
                      required
                      fullWidth
                      onChange={handleChange}
                      id="firstName"
                      label="File Description"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">
                        Priority *
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={task.priority}
                        fullWidth
                        name="priority"
                        label="Priority *"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>Priority *</em>
                        </MenuItem>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Moderate">Moderate</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      name="file"
                      type="file"
                      required
                      fullWidth
                      onChange={handleFile}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  onSubmit={postFile}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add File
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
