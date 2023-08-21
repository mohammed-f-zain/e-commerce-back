// controllers/userController.js
const { User } = require('../models');

const UserController = (req, res) => {
    const userId = req.params.id;
    getUserById(userId, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(user);
      }
    });
  };


