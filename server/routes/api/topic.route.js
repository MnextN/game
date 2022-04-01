const router = require('express').Router();
const { Topic } = require('../../db/models');

router.get('/', async (req, res) => {
    const gameTopic = await Topic.findAll({ raw: true });
    res.status(201).json(gameTopic);
});

module.exports = router;
