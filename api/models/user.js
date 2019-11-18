const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    age : String,
    email : String,
    phoneNo : String,
    password : String
});

module.exports = mongoose.model('User',userSchema);