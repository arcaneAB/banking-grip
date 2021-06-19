const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://crudBanker:uvigamer1@crud.l1n59.mongodb.net/bank?retryWrites=true&w=majority",{useFindAndModify:false,
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{console.log("db connected");})
.catch((err)=>{console.log("db not connected");})

module.exports = mongoose;
