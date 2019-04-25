var Causa = require("../models/Causa");

module.exports = {
  newCausa: (req, res) => {
    var c = new Causa({
      title: req.body.title,
      description: req.body.description,
      date: Date.now(),
      participants: 1,
      photo: req.body.photo
    });

    c.save((err, data) => {
      if (err) res.send(500);
      else res.json(data);
    });
  },

  getCausa: (req, res) => {
    Causa.findOne(
      {
        _id: req.params.id
      },
      (err, data) => {
        if (err) res.send(500);
        else res.json(data);
      }
    );
  },
  getCausas: (req, res) => {
    var q = Causa.find()
      .sort("date")
      .limit(10);
    q.exec(function(err, posts) {
      // will be of length 10
      if (err) res.send(500);
      res.json(posts);
    });
  }
};
