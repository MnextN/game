const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router
    .route('/')
    .post(async (req, res) => {
        try {
            const {
                user_name,
                user_email,
                user_password,
                user_password_repit,
            } = req.body;
            if (user_password !== user_password_repit) {
                return res.status(404).json({ message: 'password invalid' });
            }
            const hashedPassword = await bcrypt.hash(user_password, 10);
            const uniqueUser = await User.findOne({ where: { user_email } });
            if (uniqueUser) {
                return res.status(404).json({ message: 'email invalid' });
            }
            try {
                const newUser = await User.create({
                    user_name,
                    user_email,
                    user_password: hashedPassword,
                });
                if (newUser) {
                    req.session.user = newUser;
                    return res.status(200).json(newUser);
                }
                return res.status(404).json({ message: 'invalid' });
            } catch (err) {
                return res.status(500).json(err);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .delete(async (req, res) => {
        try {
            const { id } = req.session.user;
            const deleteUser = await User.destroy({ where: { id } });
            return res.status(200).json({ message: 'done' });
        } catch (err) {
            return res.status(500).json(err);
        }
    });

module.exports = router;
