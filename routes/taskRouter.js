const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");
const multer = require("multer");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: "./public/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

router.post("/newtask", auth, upload.single("file"), async (req, res) => {
  try {
    const { filename, description, success, updatedAt, status, department } =
      req.body;
    const file = req.file.filename;
    const newTask = await Task.create({
      filename,
      description,
      success,
      updatedAt,
      status,
      department : req.user.department,
      file,
      user: req.user.id
    });
    res.send({success : true, task : newTask})
    console.log(newTask)
  } catch (error) {
    res.send(error)
  }
});

router.delete("/delete/:id", auth ,async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    console.log(deleteTask)
    if (!deleteTask) {
      return res.status(404).send("Task not found");
    }
    res.send({ success: "Task has been detleted", deleteTask : deleteTask});
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
