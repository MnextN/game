const router = require('express').Router();
const sessionChecker = require('../../middleware/sessionChecker');

router.get('/', (req, res) => {
    try {
        console.log(123);
        req.session.destroy();
        res.clearCookie('user_sid');
        res.json({ url: '/' });
        // return req.session.destroy((err) => {
        //   if (err) {
        //     return res.redirect('/error');
        //   }
        //   res.clearCookie('user_sid');
        //   return res.json({url:'/'});
        // });
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
