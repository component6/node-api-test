const mongoose = require('mongoose');

const Test = mongoose.model('Test');

const getAll = (req, res) => {
  Test.find()
    .exec()
    .then(tests => res.json(tests))
    .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
  Test.create(req.body)
    .then(createdTest => res.json(createdTest))
    .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
  Test.findByIdAndUpdate({
      id: req.params.id,
    }, req.body)
    .exec()
    .then(test => res.json(test))
    .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
  Test.deleteOne({
      id: req.params.id,
    })
    .exec()
    .then(() => res.json({
      success: true,
    }))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
