const imageModel = require('../models/Image');

function index(req, res) {
  return res.status(200).send({ message: 'index' });
}

function store(req, res) {
  return res.status(200).send({ message: 'index' });
}

function remove(req, res) {
  return res.status(200).send({ message: 'remove' });
}

function update(req, res) {
  return res.status(200).send({ message: 'remove' });
}

module.exports = { index, store, remove, update };
