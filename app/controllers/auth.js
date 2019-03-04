const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/app');

const User = mongoose.model('User');

const singIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'User does not exist!' });
      }
      const isValid = bCrypt.compareSync(password, user.password);
      if (isValid) {
        const token = jwt.singIn({ user._id.toString(), jwtSecret });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials!' });
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
};

module.exports = {
  signIn,
}
