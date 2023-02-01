const express = require("express");
const reseniaSchema = require("../models/resenias.js");
const router = express.Router();

// create resenia

router.post("/resenias", (req, res) => {
    const resenia = reseniaSchema(req.body);
    resenia.save().then((data) => res.json(data)).catch((error) => res.json({
        message: error
    }));
});

// get all resenias
router.get("/resenias", (req, res) => {
    reseniaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({
            message: error
        }));
});


module.exports = router