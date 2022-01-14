const express = require("express");
const app = express();
const cors = require("cors");
const connect=require("./configs/db")
app.use(cors)
app.use(express.json());
require('dotenv').config();
const port=process.env.PORT

app.listen(port, (req, res) => {
    connect();
    console.log(`connected to ${port}`);
})