var User = require("../models/User");

module.exports = {
  enlist: (req, res) => {
    User.findAndUpdate({
      _id: req.body.user_id
    });
  }
};
