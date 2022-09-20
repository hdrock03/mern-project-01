const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.model('users', UserSchema) // users is database name if present inside database else it will automatically create it

module.exports = UserModel