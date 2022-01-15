const express = require('express')
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).send(user)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).send(user)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports=router