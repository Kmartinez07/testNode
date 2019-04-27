const imageModel = require('../models/Image');

function index(req, res) {
  return res.status(200).send({ message: 'index' });
}

function show(req, res) {
  return res.status(200).send({ message: 'show' });
}

function store(req, res) {
  if (req.file) {
    const { file } = req;
    const image = new imageModel(file);
    image.save().then(imageStored => {
      return res
        .status(201)
        .send({ message: 'Image was added successfully', image: imageStored });
    });
  } else {
    return res.status(403).send({ message: 'You must add a image' });
  }
}

function remove(req, res) {
  return res.status(200).send({ message: 'remove' });
}

function update(req, res) {
  return res.status(200).send({ message: 'remove' });
}

module.exports = { index, show, store, remove, update };
