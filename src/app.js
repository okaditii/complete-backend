// app.js to create server inside src

const express = require('express');
const app = express();

app.use(express.json());  // to parse json data from request body

const notes = []

app.post('/notes',(req,res)=>{
    console.log(req.body);   // data comes in req.body 
})

module.exports = app;