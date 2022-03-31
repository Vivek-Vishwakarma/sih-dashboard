const mongoose = require("mongoose")
const { Schema } = mongoose;
const testSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
      },
    file : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    department : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : "Pending"
    },
    filename : {
        type : String,
        required : true
    },
    priority : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    },
    success : {
        type : Boolean,
        default : false
    }
  });
  const Task = mongoose.model("task", testSchema)
  module.exports = Task