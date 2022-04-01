const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { user_email, user_password, } = req.body;
    const user = await User.findOne({
      where: { user_email },
    });
    if (user) {
      const validPassword = await bcrypt.compare(user_password, user.user_password);
      if (validPassword) {
        req.session.user = user;
        return res.status(200).json(user);
      }
      return res.status(404).json({message: 'Неверный пароль'});
    }
    return res.status(404).json({message: 'Неверный пароль или email'});
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
