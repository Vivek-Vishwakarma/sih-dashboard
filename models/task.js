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
    },
    name : {
        type : String,
        required : true
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
        type : Boolean
    }
  });
  const Task = mongoose.model("task", testSchema)
  module.exports = Task