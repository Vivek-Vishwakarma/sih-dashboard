const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");
const multer = require("multer");
const auth = require("../middleware/auth");
const Users = require("../models/user.js");

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
    const { filename, description, success, updatedAt, priority } =
      req.body;
    const file = req.file.filename;
    const currUser = await Users.findById(req.user.id)
    console.log(currUser)
    const newTask = await Task.create({
      filename,
      description,
      success,
      updatedAt,
      priority,
      department : currUser.department,
      file,
      user: req.user.id
    });
    res.send({success : true, task : newTask})
  } catch (error) {
    res.send(error)
  }
});

router.get("/tasks", auth , async (req,res) => {
  try {
    const tasks = await Task.find({user : req.user.id})
    const currentUser = await Users.findById(req.user.id)
    res.send({task : tasks, user : currentUser.name})
  } catch (error) {
    console.log(error)
  }
})

router.delete("/delete/:id", auth ,async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    console.log(deleteTask)
    if (!deleteTask) {
      return res.status(404).send("Task not found");
    }
    res.send({ success: true, deleteTask : deleteTask});
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
