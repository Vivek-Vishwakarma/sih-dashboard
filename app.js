const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path")
const mongoose = require("mongoose");
const cors = require("cors")
//mongodb://localhost:27017/profileApp
mongoose
  .connect("mongodb://localhost:27017/dashboardApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello")
})

app.use("/api/auth", require("./routes/userRouter"));

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});