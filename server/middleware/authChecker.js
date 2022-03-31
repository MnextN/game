module.exports = (req, res, next) => {
  if (req.session.user) {
    return res.json({message: 'ghghgh'});
  } return next();
};
