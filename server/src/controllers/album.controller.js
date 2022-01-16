const express = require("express");
const Album = require("../models/album.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        const albumTotalCount = await Album.find().countDocuments().lean().exec();

    const limit = +req.query.limit;
    const page = +req.query.page;
    const skipping = (page - 1) * limit;
    const album = await Album.find().populate("author").skip(skipping).limit(limit).lean().exec();

    return res.status(200).send({album,albumTotalCount});
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const album = await Album.create(req.body);
    return res.status(200).send(album);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Album.findById(req.params.id).populate("author").lean().exec();
    return res.status(200).send(data)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

module.exports = router;
