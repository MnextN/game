const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    req.session.destroy()
    res.clearCookie('user_sid');
    res.json({url:'/'});
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
