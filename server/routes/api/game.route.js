const router = require('express').Router();
const { Question } = require('../../db/models');

router.get('/',async (req,res)=>{
    const gameInfo = await Question.findAll({raw: true})
    const gameInfoSort = gameInfo.sort((a,b) => a.question_price- b.question_price)
    res.status(201).json(gameInfoSort)
})

module.exports = router;