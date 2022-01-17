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

router.patch("/:id", async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
    try {
        const user = await User.find().populate("album").lean().exec();
        return res.status(200).send(user)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.post("/single", async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
return res.status(200).send(user)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.get("/search/:name", async (req, res) => {
    var regex = new RegExp(req.params.name, "i");
    // User.find({ name: regex }).then((result) => {
    //     res.status(200).json(result)
    // }).catch(err=>res.status(400).send(err.message))
    try {
        const data = await User.find({ name: regex }).populate("album").lean().exec()
        return res.status(200).send(data)
    } catch (err) {
        
    }
})

module.exports=router