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
      res.send({ success: false, message: "Wrong Password" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/approve/:id", async (req, res) => {
  // await Task.findById(req.params.id, (task) => {
  //   task.status = req.body.status;
  //   task.success = true;
  //   task
  //     .save()
  //     .then((t) => {
  //       res.send(t);
  //     })
  //     .catch((error) => {
  //       res.send(error);
  //     });
  // });
  await Task.findByIdAndUpdate(req.params.id, {
    status : req.body.status,
    success : true
  }).then((response)=>{res.status(200).send(response)})
});

module.exports = router;
