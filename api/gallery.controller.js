const Gallery = require('../models/Gallery');

function index(req, res) {
  Gallery.find({})
    .then(galleries => {
      return res.status(200).send({ ...galleries });
    })
    .catch(error => {
      return res.status(500).send({ msg: error });
    });
}

function show(req, res) {
  Gallery.findById(req.params.id)
    .then(gallery => {
      return res.status(200).send({ ...gallery._doc });
    })
    .catch(error => {
      return res.status(500).send({ msg: 'Gallery not found', error });
    });
}

function store(req, res) {
  const { name, description } = req.body;
  const galleryModel = new Gallery({ name, description });
  galleryModel.save((error, gallery) => {
    if (error) return res.status(500).send({ message: 'Server error', error });
    else
      return res
        .status(201)
        .send({ message: 'Gallery was created successfully', gallery });
  });
}

function update(req, res) {
  const { name, description } = req.body;
  Gallery.findByIdAndUpdate(req.params.id, { name, description })
    .then(gallery => {
      if (gallery)
        return res
          .status(200)
          .send({ message: 'The gallery was updated successfully' });
      else return res.status(404).send({ message: 'Gallery not found' });
    })
    .catch(error => {
      return res.status(500).send({ message: 'Server error', error });
    });
}

function remove(req, res) {
  Gallery.findByIdAndRemove(req.params.id)
    .then(result => {
      if (result)
        return res.status(200).send({ message: 'Gallery was deleted' });
      return res.status(404).send({ message: 'Gallery not found' });
    })
    .catch(error => {
      return res.status(500).send({ message: 'Server error', error });
    });
}
function addToGallery(params) {
  return res.status(200).send({ message: 'add image to the gallery' });
}

module.exports = {
  index,
  show,
  store,
  update,
  remove,
  addToGallery
};
