const express = require('express');
const multer = require('multer');
const router = express.Router();
const imageController = require('./image.controller');
const galleryController = require('./gallery.controller');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/images');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/images/', imageController.index);
router.get('/images/:id', imageController.show);
router.post('/images/', upload.single('image'), imageController.store);
router.put('/images/:id', imageController.update);
router.delete('/images/:id', imageController.remove);

router.get('/galleries/', galleryController.index);
router.post('/galleries/', galleryController.store);
router.put('/galleries/:id', galleryController.update);
router.delete('/galleries/:id', galleryController.remove);

module.exports = router;
