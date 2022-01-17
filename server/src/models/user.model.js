const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    album:{type:mongoose.Schema.Types.ObjectId,ref:"album"}
})

const User = mongoose.model("user", userSchema);

module.exports=User