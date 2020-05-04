const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const risk = require('../utils/riskCalculator');

router.post('/user', async (req, res) => {

    const user = req.body;
    const validation = await User.validate(user);

    try {
        let result = await risk(req.body);
        if (!validation.error) {
            await res.status(201).send(result);
        }

        await res.status(400).send(validation.error)
    }

    catch (err){
        await res.status(400).send(err);
    }
});

module.exports = router;