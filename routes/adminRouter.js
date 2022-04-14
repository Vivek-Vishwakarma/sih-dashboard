const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const Task = require("../models/task.js");

router.get("/dashboard", async (req, res) => {
  try {
    const tasks = await Task.find({});
    const users = await User.find({});
    res.send({ task: tasks, user: users.name });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const password = "12345678";
    const { enteredPass } = await req.body;
    console.log(enteredPass);
    if (enteredPass === password) {
      res.send({ success: true, message: "Admin logged in sucessfully" });
    } else {
      res.send({success : false, message : "Wrong Password"});
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
