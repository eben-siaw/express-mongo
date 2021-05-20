const express = require("express"); 
const app = express.Router(); 
const mongoose = require("mongoose"); 


const connection = mongoose.connect(process.env.mongoURI, { 

})

app.post("/add-task", (req, res) => { 


}); 


app.post("/show-task", (req, res) => { 


}); 

