const mongoose = require("mongoose")
const { Schema } = mongoose;
const usersSchema = new Schema({
    name:  {
        type : String,
        required : true,
        trim : true
    },
    email: {
      type : String,
      required : true,
      unique : true
    },
    password: {
      type : String,
      required : true
    },
    department : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
  });
  const Users = mongoose.model("user",usersSchema)
  module.exports = Users