
import Sidebar from './Sidebar'
import React, { useState } from "react";

import axios from "axios";
const Newtask = () => {
  const [task, setTask] = useState({
    filename: "",
    description: "",
    status: "",
    department: "",
    file: "",
    priority : ""
  });
  const postFile = async (e) => {
    e.preventDefault();
    let formData = new FormData()
    formData.append("filename", task.filename)
    formData.append("description", task.description)
    formData.append("status", task.status)
    formData.append("file", task.file)
    formData.append("priority", task.priority)
    formData.append("department", task.department)
    try {
      const response = await axios.post(
        "http://localhost:5000/api/task/newtask",
        formData,
        {
          headers: {
            "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2YyYjRmNWU5MDMwMGU3ODU0MmRhZCIsImlhdCI6MTY0ODMwNzE5Nn0.nVnnDPUvMhFbX3GT-2ecEc808-PTfRNakOTCiL1zb78",
          },
        }
      );
      console.log(response)
      alert("Profile Added Sucessfully !!")
    } catch (error) {
      console.log(error);
    }
  };
  const handleFile = (e) => {
    setTask({ ...task, file: e.target.files[0]});
  };
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div className="dash">
      <aside className="side">
        <Sidebar />
      </aside>
      <div className="dashDiv">
        <form onSubmit={postFile}>
          <input onChange={handleChange} name="filename" type="text" placeholder='name' />
          <input onChange={handleChange} name="description"  type="text" placeholder='desc' />
          <select onChange={handleChange}  name="priority" id="priority">
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
          </select>
          <select onChange={handleChange} name="department" id="dep">
            <option value="IT">IT</option>
            <option value="CMPN">CMPN</option>
            <option value="EXTC">EXTC</option>
          </select>
          <input type="file" name='file' onChange={handleFile}/>
          <button type='submit'>submit</button>
          </form>
      </div>
    </div>
  )
}

export default Newtask