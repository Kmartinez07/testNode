const express = require('express');
const multer = require('multer');
const router = express.Router();
const imageController = require('./image.controller');

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
router.post('/images/', upload.single('image'), imageController.store);
router.put('/images/:id', imageController.update);
router.delete('/images/:id', imageController.remove);

module.exports = router;
