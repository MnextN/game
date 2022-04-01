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
                return res.status(404).json({ message: 'Неверный пароль' });
            }
            const hashedPassword = await bcrypt.hash(user_password, 10);
            const uniqueUser = await User.findOne({ where: { user_email } });
            if (uniqueUser) {
                return res.status(404).json({ message: 'Неверный email' });
            }
            try {
                const newUser = await User.create({
                    user_name,
                    user_email,
                    user_password: hashedPassword,
                });
                if (newUser) {
                    return res.status(200).json(newUser);
                }
                return res
                    .status(404)
                    .json({ message: 'Неверный пароль или email' });
            } catch (err) {
                return res.status(500).json({ message: 'Неверный email' });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .put(async (req, res) => {
        const { user_name, user_email } = req.body;
        const email = req.session.user.user_email;
        console.log('session email', email);
        const olduser = await User.findOne({
            where: { user_email },
        });
        console.log('old', olduser);
        if (!olduser || req.session.user.id === olduser.id) {
            console.log('user not found');
            try {
                const updateUser = await User.update(
                    { user_name, user_email },
                    { where: { user_email: email } }
                );
                if (updateUser) {
                    req.session.destroy();
                    res.clearCookie('user_sid');
                    return res.status(200).json(updateUser);
                }
                return res.status(404).json({ message: 'Неверный email' });
            } catch (err) {
                return res
                    .status(404)
                    .json({ message: 'Неверный пароль или email' });
            }
        }
        return res.status(404).json({ message: 'Неверный email' });
    })
    .delete(async (req, res) => {
        try {
            const { id } = req.session.user;
            const deleteUser = await User.destroy({ where: { id } });
            return res.status(200).json({ message: 'Готово' });
        } catch (err) {
            return res.status(500).json(err);
        }
    });

module.exports = router;
