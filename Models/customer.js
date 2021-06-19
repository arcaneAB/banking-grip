const mongoose = require('mongoose');

const customer = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    uniqueID : {
        type:  Number,
        required: true,
    },
    amount :{
        type:  Number,
        required: true,
    },
})

const Customer =new mongoose.model("customer",customer)

module.exports= Customer;
