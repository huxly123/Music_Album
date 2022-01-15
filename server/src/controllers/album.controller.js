const express=require('express')
const Album=require('../models/album.model')
const router = express.Router();

router.get("", async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        return res.status(200).send(album)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.post("", async (req, res) => {
    try {
        const album = await Album.create(req.body);
        return res.status(200).send(album);
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports=router