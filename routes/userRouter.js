const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { name, email, password, department } = await req.body;
  try {
    let user = await User.findOne({ email: email });
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    if (user) {
      res
        .status(400)
        .send({ sucess: false, error: true, message: "User already exist" });
    } else {
      user = await User.create({
        name: name,
        email: email,
        department: department,
        password: passwordHash,
      });
      const token = jwt.sign({ id: user._id }, "secret");
      res.send({ sucess: true, token: token, user });
    }
  } catch (error) {
    res
      .status(400)
      .send({
        sucess: false,
        error: true,
        message: "Something wrong with your creds",
      });
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = await req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .send({ sucess: false, error: true, message: "User doesn't exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .send({ sucess: false, error: true, message: "Incorrect password" });
    const token = jwt.sign({ id: user._id }, "secret");
    res.send({
      sucess: true,
      token: token,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res
      .status(400)
      .send({
        sucess: false,
        error: true,
        message: "cannot login something wrong",
      });
  }
});

router.get("/allusers", async (req,res)=>{
  const allUsers = await User.find({})
  res.send(allUsers)
})

module.exports = router