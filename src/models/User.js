const mongoose = require('mongoose') ;

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:[true,'every todo should have a text']
    }
},{
    timestamp:true
})
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    email:{
        type:String,
        required:true
    },
    todoList:[todoSchema]
})

const User = mongoose.model('User',userSchema);
module.exports = User ;
