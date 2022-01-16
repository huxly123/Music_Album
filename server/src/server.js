const express = require("express");
const app = express();
const cors = require("cors");
const connect=require("./configs/db")
app.use(cors(
 
))
app.use(express.json());
require('dotenv').config();

const userController = require("./controllers/users.controller")
app.use("/user", userController)

const albumController = require("./controllers/album.controller");
app.use("/album", albumController);

const port=process.env.PORT || 5000

app.listen(port, (req, res) => {
    connect();
    console.log(`connected to ${port}`);
})