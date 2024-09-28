const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get("/", (req, res) => {
    res.send("hey it's working");
});

if (process.env.NODE_ENV === "development") {

    router.post("/create", async (req, res) => {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            // Correctly sending the response with status and message
            return res.status(503).send("you don't have permission to create an owner");
        }

        let { fullName, email, password } = req.body;

        let createdOwner = await ownerModel.create({
            fullName,
            email,
            password,
        });

        // Correcting the typo and response structure
        res.status(201).send(createdOwner);
    });
}

module.exports = router;
