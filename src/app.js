const express = require('express');

const app = express()//create server

app.use(express.json())// create route

// require all the routes here 
const authRouter = require("./routes/auth.routes")

//using all the routes here
app.use("/api/auth", authRouter)


module.exports = app