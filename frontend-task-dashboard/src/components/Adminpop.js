import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiFillEdit } from "react-icons/ai";

import "../App.css";

import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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

export default function Adminpop({ selectedTask }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [approve, setApprove] = useState("");

  const postApprove = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/task/newtask"
        // formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      console.log(selectedTask);
  }, []);
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
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Evaluate</InputLabel>
            <Select
              autoFocus
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Evaluate"
              name="status"
              value={approve}
              onChange={(e) => {
                  setApprove(e.target.value)
              }}
            >
              <MenuItem value="approved">Approve</MenuItem>
              <MenuItem value="desk 1">Desk 1</MenuItem>
              <MenuItem value="desk 2">Desk 2</MenuItem>
              <MenuItem value="desk 3">Desk 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="success" onClick={postApprove}>Confirm</Button>
        </Box>
      </Modal>
    </div>
  );
}
