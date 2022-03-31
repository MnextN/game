const router = require('express').Router();
const sessionChecker = require('../../middleware/sessionChecker');

router.get('/', sessionChecker, (req, res) => {
  try {
    return req.session.destroy((err) => {
      if (err) {
        return res.redirect('/error');
      } res.clearCookie('user_sid');
      return res.redirect('/');
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
